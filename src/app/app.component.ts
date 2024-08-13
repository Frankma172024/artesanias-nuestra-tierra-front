import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    HttpClientModule,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'artesanias-nuestra-tierra-front';
}