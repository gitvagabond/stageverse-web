import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-overlay-view-vimeo-video',
  templateUrl: './overlay-view-vimeo-video.component.html',
  styleUrls: ['./overlay-view-vimeo-video.component.scss']
})
export class OverlayViewVimeoVideoComponent extends BaseModalComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
