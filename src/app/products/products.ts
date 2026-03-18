import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../models/iproduct';
import { ICategory } from '../models/icategory';
import { ProductService } from '../services/product';
import { ProductCard } from '../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {

  storeName: string = 'NOON';
  products: IProduct[] = [];
  categories: ICategory[] = [];
  selectedCategoryId: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => this.products = data);
    this.productService.getCategories().subscribe(data => this.categories = data);
  }

  get filteredProducts(): IProduct[] {
    if (this.selectedCategoryId == 0) return this.products;

    return this.products.filter(
      p => p.categoryId == this.selectedCategoryId
    );
  }

  onBuy(id: number) {
    const product = this.products.find(p => p.id === id);

    if (product && product.quantity > 0) {
      this.productService
        .buy(id, product.quantity - 1)
        .subscribe(updated => {
          product.quantity = updated.quantity;
        });
    }
  }
  onView(id: number) {
    console.log(id);
  }
}