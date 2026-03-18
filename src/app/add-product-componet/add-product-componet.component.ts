import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-add-product-componet',
  imports: [],
  templateUrl: './add-product-componet.component.html',
  styleUrl: './add-product-componet.component.css',
})
export class AddProductComponetComponent {
   constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    quantity: [1, [Validators.required, Validators.min(0)]],
    categoryId: [null, Validators.required],
    description: [''],
    imageUrl: ['']
  });

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.add(this.productForm.value)
        .subscribe(() => {
          this.router.navigate(['/products']);
        });
    }
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
