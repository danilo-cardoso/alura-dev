import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  @Input() active: boolean = false;
  @Output() searchToggle = new EventEmitter<void>();

  title: string = this.active ? 'Fechar barra de pesquisa' : 'Pesquisar algo'

  public toggleSearchBar(): void {
    this.searchToggle.emit();
  }
}
