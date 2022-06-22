import { IProduct } from 'src/app/Models/IProduct';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/Models/ICategory';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  categoriySelector: string = '';
  productlist: IProduct[];
  categoryList: ICategory[];
  countitems: number = 0;
  Products_pag: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  countsingleproduct: string = '0';

  constructor(
    private _productsService: ProductService,
    private _categoryService: CategoryService,
    private _cartService: CartService
  ) {
    this.productlist = this._productsService.getAllProduct();
    this.categoryList = this._categoryService.getAllCategroy();
    this.countitems = this._productsService.countitems;


  }

  addToCart(items: IProduct, productcount: any) {
    this._cartService.AddProductCart(items, productcount);
    //  this._cartService.total= this._cartService.cartItemsSum();
    this._productsService.observeProductCount(items.countorder);


  }
  getProductByCatName(categoriySelector: string): IProduct[] {
    this.page = 1;
    return (this.productlist =
      this._productsService.getProductByCatName(categoriySelector));
  }
  getProductItemsNum() {
    this.countitems = this.productlist.length;
  }
  setproductcount(value: any) {
    this.countsingleproduct = value;
    // console.log(this.countsingleproduct);
  }
  sendvalue(value: any) {
    this.productlist = value;
    console.log(this.productlist);
  }
  ontableSelect(event: any): void {
    this.page = event;

    // this.productsselect=this.Products_pag;
    this.Products_pag = this.productlist;
  }
  onTableSizeChanged(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.Products_pag = this.productlist;
  }

  increaseProduct(count: any) {
    // Number(count.value)++;
    count.value++;
  }
  decreaseProduct(count: any){
    count.value--;
  }
}
