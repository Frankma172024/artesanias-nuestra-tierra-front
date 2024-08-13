import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderArtisansComponent } from "../../components/header-artisans/header-artisans.component";

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent, 
    HeaderArtisansComponent],
  templateUrl: './artisans.component.html',
  styleUrl: './artisans.component.css'
})
export class ArtisansComponent {

}
