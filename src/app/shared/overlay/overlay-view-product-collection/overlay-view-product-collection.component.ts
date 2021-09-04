import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';
import { ModalService } from '../../../shared/overlay/modal.service';

@Component({
  selector: 'app-overlay-view-product-collection',
  templateUrl: './overlay-view-product-collection.component.html',
  styleUrls: ['./overlay-view-product-collection.component.scss']
})
export class OverlayViewProductCollectionComponent extends BaseModalComponent implements OnInit {

  constructor(private _modalService: ModalService) {
    super();
  }

  ngOnInit(): void {
  }

}
