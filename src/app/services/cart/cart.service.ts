import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Array<CartProduct> = [];
  totalItems: number = 0;
  feesAndTaxes: number = 0;
  totalPrice: number = 0;

  cartUpdated: EventEmitter<CartSummary>;

  constructor() {
    this.cartUpdated = new EventEmitter<CartSummary>();
  }

  private calculateTotalPrice(): number {
    return this.cartProducts.reduce((total, cartProduct) => total += (cartProduct.product.price * cartProduct.qty), 0);
  }

  private calculateTotalQty(): number {
    return this.cartProducts.reduce((total, cartProduct) => total += cartProduct.qty, 0);
  }

  private updateCart() {
    this.totalItems = this.calculateTotalQty();
    this.totalPrice = this.calculateTotalPrice();
    this.cartUpdated.emit(new CartSummary(this.totalItems, this.totalPrice))
  }

  increaseProductQtyInCart(product: Product) {
    const productExistInCart = this.cartProducts
      .find(cartProduct => cartProduct.product.id === product.id);
    if (!productExistInCart) {
      this.cartProducts.push(new CartProduct(product, 1, product.price));
    } else {
      productExistInCart.qty += 1;
    }
    this.updateCart();
  }

  decreaseProductQtyInCart(product: Product) {
    const productExistInCart = this.cartProducts
      .find(cartProduct => cartProduct.product.id === product.id);
    if (productExistInCart) {
      if (productExistInCart.qty == 1) {
        this.removeProduct(product);
      } else {
        productExistInCart.qty -= 1;
      }
      this.updateCart();
    }
  }

  removeProduct(product) {
    this.cartProducts = this.cartProducts
      .filter(cartProduct => cartProduct.product.id !== product.id);
    this.updateCart();
  }

  isProductInCart(product): boolean {
    let productExistsInCart = this.cartProducts
      .find(cartProduct => cartProduct.product.id === product.id);
    return productExistsInCart !== undefined;
  }
  getProductQtyInCart(product): number {
    const productInCart = this.cartProducts
      .find(cartProduct => cartProduct.product.id === product.id);
      return !productInCart ? 0 : productInCart.qty;
  }

}

export class CartProduct {
  product: Product;
  qty: number;
  total: number;
  constructor(product: Product, qty: number, total: number) {
    this.product = product;
    this.qty = qty;
    this.total = total;
  }
}

export class CartSummary {
  totalItems: number;
  totalPrice: number;
  constructor(totalItems: number, totalPrice: number) {
    this.totalItems = totalItems;
    this.totalPrice = totalPrice;
  }
}

export class Product {
  id: string;
  name: string;
  price: number;
  image: string;
  constructor(id: string, name: string, price: number, image?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}


