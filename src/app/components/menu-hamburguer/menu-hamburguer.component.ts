import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-menu-hamburguer',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './menu-hamburguer.component.html',
  styleUrl: './menu-hamburguer.component.css'
})
export class MenuHamburguerComponent {
  active: boolean = false;

  toggleMenu() {
    this.active = !this.active;
  }
}
