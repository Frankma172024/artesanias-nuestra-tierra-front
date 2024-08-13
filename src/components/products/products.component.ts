import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log("Entra aqui")
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

}
