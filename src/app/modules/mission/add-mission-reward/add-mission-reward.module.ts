import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseCardModule } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddMissionRewardComponent } from 'app/modules/mission/add-mission-reward/add-mission-reward.component';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: AddMissionRewardComponent,
    },
];

@NgModule({
    declarations: [AddMissionRewardComponent],
    imports: [
        RouterModule.forChild(exampleRoutes),
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        SharedModule,
        FuseCardModule,
        MatSnackBarModule,
    ],
})
export class AddMissionRewardModule {}
