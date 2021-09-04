import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'user-details-dialog',
    templateUrl: './user-details-dialog.component.html',
})
export class UserDetailsDialog {
    constructor(public dialogRef: MatDialogRef<UserDetailsDialog>) {}

    close(): void {
        this.dialogRef.close();
    }
}
