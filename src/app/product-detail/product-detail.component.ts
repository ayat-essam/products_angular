import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProduct } from '../models/iproduct';
import { ProductService } from '../services/prodect-services';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: IProduct;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getById(id)
      .subscribe(data => this.product = data);
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
  deleteProduct(): void {
    if (!this.product) return;

    this.productService.delete(this.product.id)
      .subscribe(() => {
        this.router.navigate(['/products']);
      });
  }
}