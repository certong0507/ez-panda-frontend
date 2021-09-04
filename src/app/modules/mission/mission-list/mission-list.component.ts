import { Component, ViewEncapsulation } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent {
  displayedColumns: string[] = ['position', 'name', 'reward'];
  mission = [];

  constructor(
    private _sharedService: SharedService,
  ) {
    this.mission = _sharedService.mission;
  }

  ngOnInit(): void {
  }

}
