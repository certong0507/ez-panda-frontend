import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-with-back-header',
  templateUrl: './with-back-header.component.html',
  styleUrls: ['./with-back-header.component.scss']
})
export class WithBackHeaderComponent implements OnInit {

  @Input() headerText: string;
  @Input() navigatePath: string;

  constructor(
    private location: Location,
        private router: Router,
  ) { }

  ngOnInit(): void {
  }

  back(): void {
    if (this.navigatePath !== undefined) {
      this.router.navigate([this.navigatePath]);
    }
    else {
      this.location.back();
    }
  }

}
