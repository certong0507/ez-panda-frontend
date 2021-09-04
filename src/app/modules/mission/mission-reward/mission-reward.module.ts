import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { MissionRewardComponent } from 'app/modules/mission/mission-reward/mission-reward.component';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: MissionRewardComponent,
    },
];

@NgModule({
    declarations: [MissionRewardComponent],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTableModule,
        CommonModule,
        SharedModule
    ],
})
export class MissionRewardModule {}
