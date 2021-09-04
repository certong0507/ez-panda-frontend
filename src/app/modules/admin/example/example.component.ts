import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FinanceService } from 'app/modules/admin/example/finance.service';
import { UserDetailsDialog } from 'app/layout/common/dialogs/user-details-dialog/user-details-dialog.component';

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent {
    @ViewChild('recentTransactionsTable', { read: MatSort })
    recentTransactionsTableMatSort: MatSort;
    data: any;
    accountBalanceOptions: ApexOptions;
    recentTransactionsDataSource: MatTableDataSource<any> =
        new MatTableDataSource();
    recentTransactionsTableColumns: string[] = [
        'transactionId',
        'date',
        'name',
        'amount',
        'status',
    ];

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _financeService: FinanceService,
        private _fuseConfirmationService: FuseConfirmationService,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this._financeService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                // Store the data
                this.data = data;

                // Store the table data
                this.recentTransactionsDataSource.data =
                    data.recentTransactions;

                // Prepare the chart data
                this._prepareChartData();
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        // Make the data source sortable
        this.recentTransactionsDataSource.sort =
            this.recentTransactionsTableMatSort;
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    private _prepareChartData(): void {
        // Account balance
        this.accountBalanceOptions = {
            chart: {
                animations: {
                    speed: 400,
                    animateGradually: {
                        enabled: false,
                    },
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                width: '100%',
                height: '100%',
                type: 'area',
                sparkline: {
                    enabled: true,
                },
            },
            colors: ['#A3BFFA', '#667EEA'],
            fill: {
                colors: ['#CED9FB', '#AECDFD'],
                opacity: 0.5,
                type: 'solid',
            },
            series: this.data.accountBalance.series,
            stroke: {
                curve: 'straight',
                width: 2,
            },
            tooltip: {
                followCursor: true,
                theme: 'dark',
                x: {
                    format: 'MMM dd, yyyy',
                },
                y: {
                    formatter: (value): string => value + '%',
                },
            },
            xaxis: {
                type: 'datetime',
            },
        };
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(UserDetailsDialog, {
            maxWidth: '90vw',
            width: '90%'
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: `, result);
        });

        // // Open the dialog and save the reference of it
        // const dialogRef = this._fuseConfirmationService.open();

        // // Subscribe to afterClosed from the dialog reference
        // dialogRef.afterClosed().subscribe((result) => {
        //     console.log(result);
        // });
    }
}
