import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subscriber } from 'rxjs';
import { IProduct } from '../Models/IProduct';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  cart: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  openCart: boolean = true;
  Status: boolean = false;
  productsCard: IProduct[] = [];
  total: number = 0;
  //  itemCart:number =0;
  itemCart = new BehaviorSubject(0);
  count: number = 0;
  totalPriceCard = new BehaviorSubject(0);

  constructor(private _productsService: ProductService) {}

  AddProductCart(items: IProduct, productcount: any) {
    this._productsService.getAllProduct().map((product) => {
      if (product.id === items.id) {
        if (Number(productcount.value) > 0) {
          if (!this.productsCard.find((data) => data.id === items.id)) {
            product.rating.count =
              product.rating.count - Number(productcount.value);
            product.countorder += Number(productcount.value);
            this.productsCard.push(product);
            // this.cartItemsSum();
            this.count++;
            this.itemCart.next(this.count);
          } else {
            this.productsCard.map((productservice) => {
              if (productservice.id == items.id) {
                productservice.countorder += Number(productcount.value);
                productservice.rating.count -= Number(productcount.value);
              }
              // this.cartItemsSum();
            });
          }
        }
      }
    });
    this.cartItemsSum();
  }

  // showCartItems():IProduct{
  //   return this.productsCard;
  // }
  checkout() {}
  cartItemsSum(): any {
    this.total = this.productsCard.reduce((a, b) => {
      a = a + b?.price * b.countorder;
      return a;
    }, 0);
    this.totalPriceCard.next(this.total);
  }

  removeItemCart(item: IProduct) {
    this._productsService.restProductCount(item);
    console.log(this.count);
    if (this.productsCard.length > 0) {
      const index = this.productsCard.indexOf(item, 0);
      if (index > -1) {
        this.productsCard.splice(index, 1);
      }
      this.cartItemsSum();
      this.count--;
      this.itemCart.next(this.count);
    } else {
      this.itemCart.next(0);
    }

    this._productsService.getAllProduct().map((product) => {
      if (product.id == item.id) {
        this._productsService.productCount.subscribe((x) => {
          product.rating.count = product.rating.count + x;
        });
      }
    });
    // this.total =this.total -(item.price * item.countorder);
  }
}
