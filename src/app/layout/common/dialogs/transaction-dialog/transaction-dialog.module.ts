import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FuseCardModule } from '@fuse/components/card';
import { MatSelectModule } from '@angular/material/select';
import { UserDetailsDialog } from 'app/layout/common/dialogs/user-details-dialog/user-details-dialog.component';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: UserDetailsDialog,
    },
];

@NgModule({
    declarations: [UserDetailsDialog],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatMenuModule,
        MatIconModule,
        NgApexchartsModule,
        SharedModule,
        FuseCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTableModule,
        MatDialogModule,
        MatInputModule
    ],
})
export class ExampleModule {}
