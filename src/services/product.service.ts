import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products'; // Considera usar una configuración de entorno si cambias de URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Puedes implementar una lógica de manejo de errores más sofisticada aquí
    console.error('Ocurrió un error:', error.message);
    return throwError(() => new Error('Algo salió mal; por favor, intenta de nuevo más tarde.'));
  }
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[]; 
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}
