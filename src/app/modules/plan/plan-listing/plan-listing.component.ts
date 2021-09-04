import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-listing',
  templateUrl: './plan-listing.component.html',
  styleUrls: ['./plan-listing.component.scss']
})
export class PlanListingComponent implements OnInit {

  headerText: string = 'Saving Plan';

  constructor() { }

  ngOnInit(): void {
  }

}
