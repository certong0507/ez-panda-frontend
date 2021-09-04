import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.scss']
})
export class CourseListingComponent implements OnInit {

  headerText: string = 'Saving Plan';

  constructor() { }

  ngOnInit(): void {
  }

}
