import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FuseCardModule } from '@fuse/components/card';
import { MissionListComponent } from 'app/modules/mission/mission-list/mission-list.component';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: MissionListComponent,
    },
];

@NgModule({
    declarations: [MissionListComponent],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTableModule,
        FuseCardModule,
        CommonModule,
    ],
})
export class MissionListModule {}
