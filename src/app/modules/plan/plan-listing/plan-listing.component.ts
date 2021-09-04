import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { PlanSubscribeDialogComponent } from 'app/layout/common/dialogs/plan-subscribe-dialog/plan-subscribe-dialog.component';
import { SharedService } from 'app/shared/services/shared.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-plan-listing',
  templateUrl: './plan-listing.component.html',
  styleUrls: ['./plan-listing.component.scss']
})
export class PlanListingComponent implements OnInit {

  headerText: string = 'Saving Plan';
  plans = [];
  user: User;
  button: string = 'Edit';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _sharedService: SharedService,
    private _userService: UserService,
    public dialog: MatDialog,
  ) {
    this.plans = _sharedService.plans;

  }

  ngOnInit(): void {
    this._userService.user$
    .pipe((takeUntil(this._unsubscribeAll)))
    .subscribe((user: User) => {
        this.user = user;
    });

    if (this.user.userRole === 'child') {
      this.button = 'Subscribe';
    }
  }

  openDialog(item): void {
    if (this.user.userRole === 'child') {
      const dialogRef = this.dialog.open(PlanSubscribeDialogComponent, {
        maxWidth: '90vw',
        width: '90%',
        data: {
          item,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('Dialog result: ', result);

      });
    }

  }

}
