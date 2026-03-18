import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCard {

  @Input() product!: IProduct;

  @Output() bought = new EventEmitter<number>();
  @Output() viewed = new EventEmitter<number>();

  onBuy(){
    this.bought.emit(this.product.id);
  }

  onView(){
    this.viewed.emit(this.product.id);
  }

}