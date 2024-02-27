import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarComponent } from '../searchbar/searchbar.component';
import { MenuHamburguerComponent } from '../menu-hamburguer/menu-hamburguer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    SearchbarComponent,
    MenuHamburguerComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
