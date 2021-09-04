import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../shared/overlay/modal.service';
import { OverlayViewProductCollectionComponent } from '../../shared/overlay/overlay-view-product-collection/overlay-view-product-collection.component';

@Component({
  selector: 'app-product-collection-picker',
  templateUrl: './product-collection-picker.component.html',
  styleUrls: ['./product-collection-picker.component.scss']
})
export class ProductCollectionPickerComponent implements OnInit {
  @Input() orientation: string;

  collections = [{
    title: 'Standard Ticket',
    byline: 'Attend unlimited shows',
    image: ''
  },
  {
    title: 'Gold Ticket',
    byline: 'Attend unlimited shows',
    image: ''
  },
  {
    title: 'Platinum Ticket',
    byline: 'Attend unlimited shows',
    image: ''
  }]

  constructor(private _modalService: ModalService) { }

  showModal(): void {
    this._modalService.showModal(OverlayViewProductCollectionComponent, {
      allowOverlayClick: true,
      showCloseButton: true,
      data: {
        modalTitle: 'This is the sample modal'
      },
      whenClosed: () => {
        // alert('Modal has been closed');
      }
    });
  }

  ngOnInit(): void {
  }

}
