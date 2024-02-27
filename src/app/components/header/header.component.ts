import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarComponent } from '../searchbar/searchbar.component';
import { MenuHamburguerComponent } from '../menu-hamburguer/menu-hamburguer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    SearchbarComponent,
    MenuHamburguerComponent,
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  navbarActive: boolean = false;
  searchbarActive: boolean = false;

  public toggleNavbar(): void {
    this.navbarActive = !this.navbarActive;
  }

  public toggleSearchBar() {
    this.searchbarActive = !this.searchbarActive;
  }

}
