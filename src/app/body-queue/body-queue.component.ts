import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-queue',
  templateUrl: './body-queue.component.html',
  styleUrls: ['./body-queue.component.css']
})
export class BodyQueueComponent implements OnInit {

  r_status = false;
  l_status = false;

  slideToLeft = true;
  slideToRight = false;

  other_click = false;
  self_click = true;

  nav_1_click = true;
  nav_2_click = false;
  nav_3_click = false;
  nav_4_click = false;
  nav_5_click = false;

  // [ngClass.class2] = "( self_click  || other_click) && other_click"

  constructor() { }

  ngOnInit() {
  }

  l_click() {
      this.l_status = !this.l_status;
  }
  r_click() {
    this.r_status = !this.r_status;
}

}
