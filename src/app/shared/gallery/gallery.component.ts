import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/overlay/modal.service';
import { OverlayViewMediaComponent } from '../overlay/overlay-view-media/overlay-view-media.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private _modalService: ModalService) { }

  ngOnInit(): void {
  }

  showMedia(): void {
    this._modalService.showModal(OverlayViewMediaComponent, {
      allowOverlayClick: true,
      showCloseButton: false,
      data: {
        modalTitle: 'This is the sample modal'
      },
      // whenClosed: () => {
      //   alert('Modal has been closed');
      // }
    });
  }

}
