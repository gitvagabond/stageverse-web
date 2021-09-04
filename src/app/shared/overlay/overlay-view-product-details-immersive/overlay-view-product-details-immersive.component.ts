import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-overlay-view-product-details-immersive',
  templateUrl: './overlay-view-product-details-immersive.component.html',
  styleUrls: ['./overlay-view-product-details-immersive.component.scss']
})
export class OverlayViewProductDetailsImmersiveComponent extends BaseModalComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
