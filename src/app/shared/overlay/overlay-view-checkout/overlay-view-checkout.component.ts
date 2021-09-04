import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-overlay-view-checkout',
  templateUrl: './overlay-view-checkout.component.html',
  styleUrls: ['./overlay-view-checkout.component.scss']
})
export class OverlayViewCheckoutComponent extends BaseModalComponent implements OnInit {

  event: Event = {name: 'Test Concert Series', date: 'Jun 10 - Dec 31', location: 'Test Stage'};

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}

export class Event {
  name: string;
  date: string;
  location: string;
}
