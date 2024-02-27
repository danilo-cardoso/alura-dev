import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() active: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  menuOpen: string = 'fa-bars';
  menuClose: string = 'fa-xmark'

  toggleMenu() {
    this.toggle.emit();
  }
}
