import { Routes } from '@angular/router';
import { ProductService } from './products/products';
import { ProductDetailComponent } from './product-detail/product-detail.component';
export const routes: Routes = [

  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductService },
  { path: 'products/:id', component: ProductDetailComponent }

];