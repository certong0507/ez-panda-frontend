import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { WithBackHeaderComponent } from './with-back-header/with-back-header/with-back-header.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        WithBackHeaderComponent,
    ],
    declarations: [
      WithBackHeaderComponent,
    ]
})
export class SharedModule
{
}
