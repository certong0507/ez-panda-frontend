import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';

@Component({
  selector: 'app-plan-listing',
  templateUrl: './plan-listing.component.html',
  styleUrls: ['./plan-listing.component.scss']
})
export class PlanListingComponent implements OnInit {

  headerText: string = 'Saving Plan';
  plans = [];

  constructor(
    private _sharedService: SharedService,
  ) {
    this.plans = _sharedService.plans;

  }

  ngOnInit(): void {
  }

}
