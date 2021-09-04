import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent implements OnInit {

  form: FormGroup;

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
