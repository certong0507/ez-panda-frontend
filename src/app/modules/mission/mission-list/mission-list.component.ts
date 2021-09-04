import { Component, ViewEncapsulation } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent {
  displayedColumns: string[] = ['position', 'name', 'reward'];
  mission = [];
  button: string = 'Edit';
  user: User;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _sharedService: SharedService,
    private _userService: UserService,
  ) {
    this.mission = _sharedService.mission;
  }

  ngOnInit(): void {
    this._userService.user$
    .pipe((takeUntil(this._unsubscribeAll)))
    .subscribe((user: User) => {
        this.user = user;
    });

    if (this.user.userRole === 'child') {
      this.button = 'Mark as Completed';
    }
  }

}
