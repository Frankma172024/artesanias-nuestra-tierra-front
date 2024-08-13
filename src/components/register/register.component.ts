import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.userPassword !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    if (this.userName && this.userEmail && this.userPassword) {
      console.log('Usuario registrado:', {
        name: this.userName,
        email: this.userEmail,
        password: this.userPassword
      });

      // Aquí puedes agregar la lógica para registrar al usuario
      // como enviar los datos al backend

      // Redirigir al usuario a la página de login u otra página si es necesario
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }
}
