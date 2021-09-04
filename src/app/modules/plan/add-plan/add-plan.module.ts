import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AddPlanComponent } from './add-plan.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseCardModule } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const addPlanRoutes: Route[] = [
  {
      path: '',
      component: AddPlanComponent,
  },
];

@NgModule({
  declarations: [AddPlanComponent],
  imports: [
    RouterModule.forChild(addPlanRoutes),
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
  ]
})
export class AddPlanModule { }
