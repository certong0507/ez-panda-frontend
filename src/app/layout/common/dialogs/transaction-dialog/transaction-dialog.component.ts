import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    name: String;
}

@Component({
    selector: 'transaction-dialog',
    templateUrl: './transaction-dialog.component.html',
})
export class TransactionDialog {
    formFieldHelpers: string[] = [''];
    data: DialogData;

    constructor(
        public dialogRef: MatDialogRef<TransactionDialog>,
        @Inject(MAT_DIALOG_DATA) public inputData: DialogData
    ) {
        this.data = inputData;
    }

    close(): void {
        this.dialogRef.close();
    }

    getFormFieldHelpersAsString(): string {
        return this.formFieldHelpers.join(' ');
    }
}
