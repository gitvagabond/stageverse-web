import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { CartService, CartSummary } from '../../services/cart/cart.service';
import { ModalService } from '../overlay/modal.service';
import { OverlayViewCheckoutComponent } from '../overlay/overlay-view-checkout/overlay-view-checkout.component';

@Component({
  selector: 'app-button-checkout',
  templateUrl: './button-checkout.component.html',
  styleUrls: ['./button-checkout.component.scss']
})
export class ButtonCheckoutComponent implements OnInit, AfterViewInit {

  totalItems: number = 0;
  totalPrice: number = 0;

  constructor(private _cartService: CartService,
    private _modalService: ModalService) {
  }

  checkout(): void {
    this._modalService.showModal(OverlayViewCheckoutComponent, {
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

  ngAfterViewInit(): void {
    this.updateCartInfo();
    this.initHandlers();
  }

  getTotalItems(): number {
    return this._cartService.totalItems;
  }

  private updateCartInfo() {
    this.totalItems = this._cartService.totalItems;
    this.totalPrice = this._cartService.totalPrice;
  }

  private initHandlers() {
    this._cartService.cartUpdated.subscribe((cartSummary: CartSummary) => {
      this.totalItems = cartSummary.totalItems;
      this.totalPrice = cartSummary.totalPrice;
    })
  }

}
