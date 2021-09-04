import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'app/shared/services/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mission-reward',
  templateUrl: './add-mission-reward.component.html',
  styleUrls: ['./add-mission-reward.component.scss']
})
export class AddMissionRewardComponent implements OnInit {
  form: FormGroup;
  headerText: string;
  message: string = 'Reward added successfully!';
  action: string = 'Dismiss';

  constructor(
    private _formBuilder: FormBuilder,
    private _sharedService: SharedService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      reward: ['', [Validators.required]],
      credit: ['', Validators.required],
    });
  }

  onSave(): void {
    const reward = {
      reward: this.form.value.reward,
      credit: this.form.value.credit,
    };

    if (this.form.valid) {
      this._sharedService.reward.push(reward);

      this.snackBar.open(this.message);

      this.snackBar.open(this.message, this.action, {
        duration: 2000,
        // panelClass: ['blue-snackbar']
      });

      this.router.navigate(['/mission-reward']);
    }

  }

}
