import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: IProduct[] = [
    { id: 1, name: 'Dell Laptop', price: 10000, quantity: 5, categoryId: 1, date: new Date() },
    { id: 2, name: 'HP Laptop', price: 9000, quantity: 3, categoryId: 1, date: new Date() },
    { id: 3, name: 'iPhone', price: 15000, quantity: 4, categoryId: 2, date: new Date() },
    { id: 4, name: 'Headphones', price: 500, quantity: 10, categoryId: 3, date: new Date() }
  ];

  private categories: ICategory[] = [
    { id: 1, name: 'Laptops' },
    { id: 2, name: 'Mobiles' },
    { id: 3, name: 'Accessories' }
  ];
  getAll(): IProduct[] {
    return this.products;
  }

  getById(id: number): IProduct | undefined {
    return this.products.find(p => p.id === id);
  }

  getCategories(): ICategory[] {
    return this.categories;
  }

  buy(id: number): void {
    const product = this.getById(id);
    if (product && product.quantity > 0) {
      product.quantity--;
    }
  }

}