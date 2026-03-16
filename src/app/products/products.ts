import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../models/iproduct';
import { ICategory } from '../models/icategory';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  storeName: string = 'IProducts';
  selectedCategoryId: number = 0;
  categories: ICategory[] = [
    { id: 1, name: 'Laptops' },
    { id: 2, name: 'Mobiles' },
    { id: 3, name: 'Accessories' }
  ];

  products: IProduct[] = [
  { id: 1, name: 'Dell Laptop', price: 10000, quantity: 5, categoryId: 1, date: new Date() },
  { id: 2, name: 'HP Laptop', price: 9000, quantity: 3, categoryId: 1, date: new Date() },
  { id: 3, name: 'iPhone', price: 15000, quantity: 4, categoryId: 2, date: new Date() },
  { id: 4, name: 'Headphones', price: 500, quantity: 10, categoryId: 3, date: new Date() }
];

  get filteredProducts(): IProduct[] {

    if (this.selectedCategoryId == 0) {
      return this.products;
    }

    return this.products.filter(
      t => t.categoryId == this.selectedCategoryId
    );

  }
}
