import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeComponent } from '../../components/home/home.component';
import { ProductsComponent } from '../../components/products/products.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet,
            HeaderComponent, 
            HomeComponent, 
            ProductsComponent, 
            FooterComponent, 
            ContactComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
