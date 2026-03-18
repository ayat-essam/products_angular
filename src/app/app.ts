import { Component, signal } from '@angular/core';
import { ProductsComponent } from "./products/products";
import { NavbarComponent } from "./navbar/navbar";
import { FooterComponent } from "./footer/footer";

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Products, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('products');
  storeName: string = 'IProduct';
}
