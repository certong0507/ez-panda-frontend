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
import { financeRoutes } from 'app/modules/admin/example/finance.routing';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent,
    },
];

@NgModule({
    declarations: [ExampleComponent],
    imports: [
        RouterModule.forChild(financeRoutes),
        MatMenuModule,
        MatIconModule,
        NgApexchartsModule,
        SharedModule,
        FuseCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTableModule
    ],
})
export class ExampleModule {}
