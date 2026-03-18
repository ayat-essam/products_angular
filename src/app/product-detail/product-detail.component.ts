import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProduct } from '../models/iproduct';
import {ProductService} from '../services/product'
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
  ){}

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.product = this.productService.getById(id);
  }

  goBack(){
    this.router.navigate(['/products']);
  }

}