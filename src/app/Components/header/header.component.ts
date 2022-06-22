import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { StoreData } from 'src/app/Views/store-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  itemCart: number = 0;
  Status: boolean = false;
  storeData: StoreData;
  showMenu = false;

  constructor(private _CartService: CartService) {
    this.storeData = new StoreData('NgShop', ['assuit'], './');
    this.itemCart = this._CartService.count;
  }
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
  togglecart() {
    // this.cartOpen = !this.cartOpen;
    this._CartService.toggle.emit(!this.Status);
  }

  ngOnInit(): void {
    this._CartService.itemCart.subscribe((x) => {
      this.itemCart = x;
    });
    this._CartService.toggle.subscribe((status) => (this.Status = status));
  }
}
