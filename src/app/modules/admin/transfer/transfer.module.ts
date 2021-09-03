import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from 'app/shared/shared.module';
import { TransferComponent } from 'app/modules/admin/transfer/transfer.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: TransferComponent
    }
];

@NgModule({
    declarations: [
        TransferComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTableModule,
        MatSelectModule,
        MatRadioModule,
        SharedModule
    ]
})
export class TransferModule
{
}
