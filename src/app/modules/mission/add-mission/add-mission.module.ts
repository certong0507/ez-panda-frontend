import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseCardModule } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddMissionComponent } from 'app/modules/mission/add-mission/add-mission.component';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: AddMissionComponent,
    },
];

@NgModule({
    declarations: [AddMissionComponent],
    imports: [
        RouterModule.forChild(exampleRoutes),
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        SharedModule,
        FuseCardModule,
    ],
})
export class AddMissionModule {}
