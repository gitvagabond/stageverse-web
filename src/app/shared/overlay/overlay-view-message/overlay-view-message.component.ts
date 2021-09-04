import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-overlay-view-message',
  templateUrl: './overlay-view-message.component.html',
  styleUrls: ['./overlay-view-message.component.scss']
})
export class OverlayViewMessageComponent extends BaseModalComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
