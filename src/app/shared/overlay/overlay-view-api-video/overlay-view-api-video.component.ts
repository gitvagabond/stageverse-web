import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-overlay-view-api-video',
  templateUrl: './overlay-view-api-video.component.html',
  styleUrls: ['./overlay-view-api-video.component.scss']
})
export class OverlayViewApiVideoComponent extends BaseModalComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
