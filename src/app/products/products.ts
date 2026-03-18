import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ICategory } from '../models/icategory';
import { ProductService } from '../services/product';

@Injectable({
  providedIn: 'root'
})
export class Products implements OnInit {

  products: IProduct[] = [];
  categories: ICategory[] = [];
  selectedCategoryId: number = 0;

  constructor(private ProductService: ProductService){}

  ngOnInit(){
    this.products = this.ProductService.getAll();
    this.categories = this.ProductService.getCategories();
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
    this.ProductService.buy(id);
  }

  onView(id: number){
    console.log(id);
  }

}