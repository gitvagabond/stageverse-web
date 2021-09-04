import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';
import { PubSubService } from '../../../core/pub-sub.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-overlay-view-login',
  templateUrl: './overlay-view-login.component.html',
  styleUrls: ['./overlay-view-login.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class OverlayViewLoginComponent extends BaseModalComponent implements OnInit {

  modalTitle: string;

  constructor(
    private _modalService: ModalService,
    private _pubSubService: PubSubService) {
    super();
  }

  ngOnInit() {
    if (!!this._data && !!this._data.modalTitle) {
      this.modalTitle = this._data.modalTitle;
    }
  }
}
