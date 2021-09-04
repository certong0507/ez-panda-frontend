import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'course-details-plan',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  form: FormGroup;
  headerText: string;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      plan: ['', [Validators.required, Validators.email]],
      duration: ['', Validators.required],
      reward: ['', Validators.required],
      description: ['', Validators.required],
      // rememberMe: ['']
    });
  }

  onSave(): void {

  }

}
