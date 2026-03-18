import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../services/product';
import { IProduct } from '../models/iproduct';

@Component({
  selector: 'app-add-product-componet',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product-componet.component.html',
  styleUrl: './add-product-componet.component.css',
})
export class AddProductComponetComponent {
  
  productForm: FormGroup;  

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [1, [Validators.required, Validators.min(0)]],
      categoryId: [null, Validators.required],
      description: [''],
      imageUrl: [''],
      date: [new Date().toISOString()]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value as Omit<IProduct, 'id'>;
      this.productService.add(newProduct)
        .subscribe(() => {
          this.router.navigate(['/products']);
        });
    }
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}