import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  productName: string = '';
  productDescription: string = '';
  productPrice: number | null = null;
  productImageLink: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.productName && this.productDescription && this.productPrice !== null) {
      console.log('Producto añadido:', {
        name: this.productName,
        description: this.productDescription,
        price: this.productPrice,
        imageLink: this.productImageLink
      });
      
      // Aquí puedes agregar la lógica para guardar el producto
      // Redirigir al usuario a otra página si es necesario
      this.router.navigate(['/products']);
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }
}
