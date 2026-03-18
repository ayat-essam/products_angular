import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../models/iproduct';
import { ICategory } from '../models/icategory';
import { ProductService } from '../services/product';
import { ProductCard } from '../components/product-detail/product-card/product-card.component';
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

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.products = this.productService.getAll();
    this.categories = this.productService.getCategories();
  }

  get filteredProducts(): IProduct[] {
    if (this.selectedCategoryId == 0) {
      return this.products;
    }

    return this.products.filter(
      p => p.categoryId == this.selectedCategoryId
    );
  }

  onBuy(id: number){
    this.productService.buy(id);
  }

  onView(id: number){
    console.log(id);
  }
}