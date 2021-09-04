import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { financeRoutes } from 'app/modules/admin/example/finance.routing';
import { UserDetailsDialog } from 'app/layout/common/dialogs/user-details-dialog/user-details-dialog.component';
import { TransactionDialog } from 'app/layout/common/dialogs/transaction-dialog/transaction-dialog.component';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent,
    },
];

@NgModule({
    declarations: [ExampleComponent, UserDetailsDialog, TransactionDialog],
    imports: [
        RouterModule.forChild(financeRoutes),
        MatMenuModule,
        MatIconModule,
        NgApexchartsModule,
        SharedModule,
        FuseCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatSelectModule
    ],
})
export class ExampleModule {}
