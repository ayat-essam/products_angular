import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/iproduct';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:3000/categories');
  }

  buy(id: number, qty: number): Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.apiUrl}/${id}`, {
      quantity: qty
    });
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  add(product: Omit<IProduct, 'id'>): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiUrl, product);
  }
}