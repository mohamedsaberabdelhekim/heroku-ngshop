import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  Product_ID: number=0;
  product:IProduct| null=null;
  constructor(private _productsService: ProductService,private _activedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.Product_ID =Number(this._activedRoute.snapshot.paramMap.get('id'));
    this.product=this._productsService.getProductById(this.Product_ID);
  }

}
