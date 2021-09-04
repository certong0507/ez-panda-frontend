import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'plan-subscribe-dialog',
    templateUrl: './plan-subscribe-dialog.component.html',
})
export class PlanSubscribeDialogComponent {
    formFieldHelpers: string[] = [''];
    data: any;

    constructor(
        public dialogRef: MatDialogRef<PlanSubscribeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public inputData,
    ) {
        this.data = inputData;
    }

    close(): void {
        this.dialogRef.close(true);
    }

    getFormFieldHelpersAsString(): string {
        return this.formFieldHelpers.join(' ');
    }

}
