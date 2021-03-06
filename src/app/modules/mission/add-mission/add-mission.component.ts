import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'app/shared/services/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.scss']
})
export class AddMissionComponent implements OnInit {
  form: FormGroup;
  headerText: string;
  message: string = 'Mission added successfully!';
  action: string = 'Dismiss';

  constructor(
    private _formBuilder: FormBuilder,
    private _sharedService: SharedService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      mission: ['', [Validators.required]],
      target: ['', Validators.required],
      credit: ['', Validators.required],
      description: ['', Validators.required],
      // rememberMe: ['']
    });
  }

  onSave(): void {
    const mission = {
      mission: this.form.value.mission,
      target: this.form.value.target,
      credit: this.form.value.credit,
      description: this.form.value.description,
    };

    if (this.form.valid) {
      this._sharedService.mission.push(mission);

      this.snackBar.open(this.message);

      this.snackBar.open(this.message, this.action, {
        duration: 2000,
        // panelClass: ['blue-snackbar']
      });

      this.router.navigate(['/mission']);
    }

  }

}
