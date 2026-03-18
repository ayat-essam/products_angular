import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('products');
  storeName: string = 'IProduct';
}
