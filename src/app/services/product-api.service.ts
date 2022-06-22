import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductAPIService {
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.APIURL}products`);
  }

  // getProductByCatName(categoryName: string): IProduct[] {}

  // getProductById(id: number): IProduct | null {}
  // addproduct(product: IProduct) {}
  // updateproduct(prdID: number, product: IProduct) {}
  // deleteproduct(prdID: number) {}
}
