import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PlanOptionsComponent } from './plan-options.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseCardModule } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const planOptionsRoutes: Route[] = [
  {
      path: '',
      component: PlanOptionsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(planOptionsRoutes),
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class PlanOptionsModule { }
