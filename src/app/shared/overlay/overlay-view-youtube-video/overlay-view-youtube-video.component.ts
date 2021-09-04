import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-overlay-view-youtube-video',
  templateUrl: './overlay-view-youtube-video.component.html',
  styleUrls: ['./overlay-view-youtube-video.component.scss']
})
export class OverlayViewYoutubeVideoComponent extends BaseModalComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
