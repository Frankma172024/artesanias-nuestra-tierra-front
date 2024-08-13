import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { ContactComponent } from '../components/contact/contact.component';
import { LoginComponent } from '../pages/login/login.component';
import { PrincipalComponent } from '../pages/principal/principal.component';
import { ArtisansComponent } from '../pages/artisans/artisans.component';
import { NewProductComponent } from '../components/new-product/new-product.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { RegisterComponent } from '../components/register/register.component';

  export const routes: Routes = [
    { path: '', redirectTo: '/principal/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'register', component: RegisterComponent },

    {
      path: 'principal',
      component: PrincipalComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'contact', component: ContactComponent }
      ]
    },
    {
      path: 'artisans',
      component: ArtisansComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'new-product', component: NewProductComponent }
      ]
    },
    { path: '**', redirectTo: '/login' }
  ];