import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
    name: string;
}

@Component({
    selector: 'plan-detail-dialog',
    templateUrl: './plan-detail-dialog.component.html',
})
export class PlanDetailDialogComponent {
    formFieldHelpers: string[] = [''];
    data: DialogData;

    constructor(
        public dialogRef: MatDialogRef<PlanDetailDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public inputData: DialogData,
        private router: Router,
    ) {
        this.data = inputData;
    }

    close(): void {
        this.dialogRef.close(true);
    }

    getFormFieldHelpersAsString(): string {
        return this.formFieldHelpers.join(' ');
    }

    // routeToAddPlan(): void {
    //     this.dialogRef.close();

    // //     this.router.navigate(['/add-plan'], { state: { id: 'signup success', } });
    // }
}
