import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';
import { ModalService } from '../../../shared/overlay/modal.service';

@Component({
  selector: 'app-overlay-view-product-details',
  templateUrl: './overlay-view-product-details.component.html',
  styleUrls: ['./overlay-view-product-details.component.scss']
})
export class OverlayViewProductDetailsComponent extends BaseModalComponent implements OnInit {

  constructor(private _modalService: ModalService) {
    super();
  }

  ngOnInit(): void {
  }

}
