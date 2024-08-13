// src/app/contact/contact.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule] // Asegúrate de importar FormsModule aquí
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Datos del formulario:', this.contact);
    alert('Tu mensaje ha sido recibido. Gracias por contactarnos!');
    this.contact = { name: '', email: '', message: '' }; // Limpiar el formulario
  }
}
