import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseCardModule } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const addPlanRoutes: Route[] = [
  {
      path: '',
      component: CourseDetailsComponent,
  },
];

@NgModule({
  declarations: [CourseDetailsComponent],
  imports: [
    RouterModule.forChild(addPlanRoutes),
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class CourseDetailsModule { }
