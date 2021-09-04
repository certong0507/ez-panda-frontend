import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.scss']
})
export class AddMissionComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      mission: ['', [Validators.required, Validators.email]],
      target: ['', Validators.required],
      reward: ['', Validators.required],
      credit: ['', Validators.required],
      description: ['', Validators.required],
      // rememberMe: ['']
    });
  }

  onSave(): void {

  }

}
