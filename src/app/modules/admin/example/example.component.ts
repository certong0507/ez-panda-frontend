/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/member-ordering */
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexXAxis,
    ApexFill,
} from 'ng-apexcharts';
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FinanceService } from 'app/modules/admin/example/finance.service';
import { UserDetailsDialog } from 'app/layout/common/dialogs/user-details-dialog/user-details-dialog.component';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    fill: ApexFill;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent {
    // @ViewChild('recentTransactionsTable', { read: MatSort })
    @ViewChild('chart')
    chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    recentTransactionsTableMatSort: MatSort;
    data: any;
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
        public dialog: MatDialog,
        private _fuseNavigationService: FuseNavigationService
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
        this.chartOptions = {
            series: [
                {
                    name: 'Inflation',
                    data: [2.3, 3.1, 4.0],
                },
            ],
            chart: {
                toolbar: {
                    show: false,
                },
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function(val) {
                    return val + '%';
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ['#304758'],
                },
            },

            xaxis: {
                categories: ['Jan', 'Feb', 'Mar'],
                position: 'top',
                labels: {
                    offsetY: -18,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        },
                    },
                },
                tooltip: {
                    enabled: true,
                    offsetY: -35,
                },
            },
            // fill: {
            //     type: 'gradient',
            //     gradient: {
            //         shade: 'light',
            //         type: 'horizontal',
            //         shadeIntensity: 0.25,
            //         gradientToColors: undefined,
            //         inverseColors: true,
            //         opacityFrom: 1,
            //         opacityTo: 1,
            //         stops: [50, 0, 100, 100],
            //     },
            // },
            yaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                        return val + '%';
                    },
                },
            },
            title: {
                // text: 'Monthly Inflation in Argentina, 2002',
                // floating: 0,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444',
                },
            },
        };
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(UserDetailsDialog, {
            maxWidth: '90vw',
            width: '90%',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Dialog result: ', result);
        });

        // // Open the dialog and save the reference of it
        // const dialogRef = this._fuseConfirmationService.open();

        // // Subscribe to afterClosed from the dialog reference
        // dialogRef.afterClosed().subscribe((result) => {
        //     console.log(result);
        // });
    }

    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
