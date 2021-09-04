import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-overlay-view-media',
  templateUrl: './overlay-view-media.component.html',
  styleUrls: ['./overlay-view-media.component.scss']
})
export class OverlayViewMediaComponent extends BaseModalComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
