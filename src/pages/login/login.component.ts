import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, // This makes the component standalone
  imports: [CommonModule, FormsModule,RouterModule], // Import necessary modules directly
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Logic for user authentication
    if (this.email && this.password) {
      console.log('Iniciando sesión...');
      // Add actual authentication logic here
      this.router.navigate(['/artisans/home']);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
