import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="login()">Login</button>`
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login();
    this.router.navigate(['/products/new']);
  }
}