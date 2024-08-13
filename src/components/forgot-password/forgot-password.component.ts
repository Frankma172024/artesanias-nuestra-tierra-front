import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email) {
      console.log('Se ha solicitado una recuperación de contraseña para:', this.email);
      
      // Aquí puedes agregar la lógica para manejar la recuperación de contraseña
      // Por ejemplo, enviar una solicitud al backend para enviar el enlace de recuperación
      
      // Redirigir al usuario a la página de login o mostrar un mensaje de confirmación
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, ingrese su dirección de correo electrónico.');
    }
  }
}
