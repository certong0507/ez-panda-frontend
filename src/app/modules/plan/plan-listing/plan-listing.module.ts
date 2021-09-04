import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PlanListingComponent } from './plan-listing.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseCardModule } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const planRoutes: Route[] = [
  {
      path: '',
      component: PlanListingComponent,
  },
];

@NgModule({
  declarations: [
    PlanListingComponent,
  ],
  imports: [
    RouterModule.forChild(planRoutes),
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class PlanListingModule { }
