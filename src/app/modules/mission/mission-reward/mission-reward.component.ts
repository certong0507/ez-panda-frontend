import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';
import {
  FuseNavigationService,
  FuseVerticalNavigationComponent,
} from '@fuse/components/navigation';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mission-reward',
  templateUrl: './mission-reward.component.html',
  styleUrls: ['./mission-reward.component.scss']
})
export class MissionRewardComponent implements OnInit {
  headerText: string;
  reward = [];
  button: string = 'Edit';
  user: User;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _sharedService: SharedService,
    private _fuseNavigationService: FuseNavigationService,
    private _userService: UserService,
  ) {
    this.reward = _sharedService.reward;
  }

  ngOnInit(): void {
    this._userService.user$
    .pipe((takeUntil(this._unsubscribeAll)))
    .subscribe((user: User) => {
        this.user = user;
    });

    if (this.user.userRole === 'child') {
      this.button = 'Redeem';
    }
  }

  toggleNavigation(name: string): void {
    // Get the navigation
    const navigation =
        this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
            name
        );

    if (navigation) {
        // Toggle the opened status
        navigation.toggle();
    }
}

}
