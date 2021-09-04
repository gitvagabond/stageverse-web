import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { CartService, CartProduct } from '../../services/cart/cart.service';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss']
})
export class CheckoutSummaryComponent implements OnInit, AfterViewInit {

  constructor(private _cartService: CartService) { }

  @Input() eventName: string;
  @Input() eventLocation: string;
  @Input() eventDate: string;

  cartTotalPrice: number = 0;
  cartFeesAndTaxes: number = 0;
  cartProducts: Array<CartProduct>;  

  ngOnInit(): void {
    this.cartTotalPrice = this._cartService.totalPrice;
    this.cartFeesAndTaxes = this._cartService.feesAndTaxes;
    this.cartProducts = this._cartService.cartProducts;
  }

  ngAfterViewInit(): void {
    
  }

}
