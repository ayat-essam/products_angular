import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCard {
  @Input() product!: IProduct;
  @Output() bought = new EventEmitter<number>();
  @Output() viewed = new EventEmitter<number>();

  constructor(private router: Router) {}

  onBuy(){
    this.bought.emit(this.product.id);
  }

  onView(){
    console.log(this.product.id);
    this.viewed.emit(this.product.id);
    this.router.navigate(['/products', this.product.id]);
  }
}