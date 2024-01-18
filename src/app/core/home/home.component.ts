import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

  export class HomeComponent {
    items: { [key: string]: string } = {
      'Wayrapaq': 'el dúo peruano que trajo su música a Resistencia',
      'Formosa: piden dar acceso a brigadistas para fumigar las casas': 'En la última semana en más de 700 hogares les impidieron el descacharrado y la fumigación.'
    }
  }
