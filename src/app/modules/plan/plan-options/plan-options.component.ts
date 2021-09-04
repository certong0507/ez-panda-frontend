import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlanDetailDialogComponent } from 'app/layout/common/dialogs/plan-detail-dialog/plan-detail-dialog.component';

@Component({
  selector: 'app-plan-options',
  templateUrl: './plan-options.component.html',
  styleUrls: ['./plan-options.component.scss']
})
export class PlanOptionsComponent implements OnInit {

  headerText: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  openDialog(name: string): void {
    const dialogRef = this.dialog.open(PlanDetailDialogComponent, {
      maxWidth: '90vw',
      width: '90%',
      data: {
        name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result: ', result);

      if (result) {
        this.router.navigate(['/add-plan']);
      }

    });
  }

}
