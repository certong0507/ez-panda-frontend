import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'app/shared/services/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent implements OnInit {

  form: FormGroup;
  headerText: string;
  message: string = 'Plan added successfully!';
  action: string = 'Dismiss';

  constructor(
    private _formBuilder: FormBuilder,
    private _sharedService: SharedService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      plan: ['', [Validators.required]],
      duration: ['', Validators.required],
      reward: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSave(): void {
    const plan = {
      plan: this.form.value.plan,
      duration: this.form.value.duration,
      reward: this.form.value.reward,
      description: this.form.value.description,
    };

    if (this.form.valid) {
      this._sharedService.plans.push(plan);

      this.snackBar.open(this.message);

      this.snackBar.open(this.message, this.action, {
        duration: 2000,
        // panelClass: ['blue-snackbar']
      });

      this.router.navigate(['/plan-listing']);
    }

  }

}
