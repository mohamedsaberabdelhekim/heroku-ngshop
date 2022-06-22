import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartproduct: IProduct[];
  _serviceSubscription: any;
  _totalcheck: any;
  Status: boolean = false;
  TotalPrice: number = 0;
  constructor(private _CartService: CartService) {
    this.cartproduct = _CartService.productsCard;

    this.Status = _CartService.Status;
    this.TotalPrice = 0;
  }

  removeItemCart(item: IProduct) {
    this._CartService.removeItemCart(item);
  }
  ngOnInit(): void {
    this._CartService.toggle.subscribe((status) => (this.Status = status));
    this._CartService.cart.subscribe({
      next: (event: IProduct) => {
        this._serviceSubscription = event;
      },
    });
    this._CartService.totalPriceCard.subscribe((x) => {
      this.TotalPrice = x;
    });
  }
  togglecart() {
    this._CartService.toggle.emit(this.Status);
    this._CartService.itemCart.subscribe((x) => {
      this.TotalPrice = x;
    });
  }
}
