import { Routes } from '@angular/router';
import { ProductService } from '../app/services/product';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Products } from './products/products';
export const routes: Routes = [

  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetailComponent }

];