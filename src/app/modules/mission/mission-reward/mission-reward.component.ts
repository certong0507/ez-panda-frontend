import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';
import {
  FuseNavigationService,
  FuseVerticalNavigationComponent,
} from '@fuse/components/navigation';

@Component({
  selector: 'app-mission-reward',
  templateUrl: './mission-reward.component.html',
  styleUrls: ['./mission-reward.component.scss']
})
export class MissionRewardComponent implements OnInit {
  headerText: string;
  reward = [];

  constructor(
    private _sharedService: SharedService,
    private _fuseNavigationService: FuseNavigationService
  ) {
    this.reward = _sharedService.reward;
  }

  ngOnInit(): void {
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
