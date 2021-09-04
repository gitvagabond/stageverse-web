import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/overlay/modal.service';
import { OverlayViewProductDetailsComponent } from '../overlay/overlay-view-product-details/overlay-view-product-details.component';
import { CartService, CartSummary, Product } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-picker',
  templateUrl: './product-picker.component.html',
  styleUrls: ['./product-picker.component.scss']
})
export class ProductPickerComponent implements OnInit {

  products: Array<Product> = [
    new Product("1", "Product 1", 999, ''),
    new Product("2", "Product 2", 1999, ''),
    new Product("3", "Product 3", 2999, ''),
    new Product("4", "Product 4", 3999, ''),
    new Product("5", "Product 5", 4999, ''),
    new Product("6", "Product 6", 5999, ''),
    new Product("7", "Product 7", 6999, ''),
  ]

  constructor(private _modalService: ModalService,
    private _cartService: CartService) { }

  increaseProductQty(product: Product) {
    this._cartService.increaseProductQtyInCart(product);
  }
  decreaseProductQty(product: Product) {
    this._cartService.decreaseProductQtyInCart(product);
  }
  isProductInCart(product: Product): boolean {
    return this._cartService.isProductInCart(product);
  }
  getProductQty(product: Product): number {
    return this._cartService.getProductQtyInCart(product);
  }

  ngOnInit(): void {
  }

  showProductDetails(product: Product): void {
    this._modalService.showModal(OverlayViewProductDetailsComponent, {
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
