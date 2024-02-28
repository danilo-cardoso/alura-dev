import { ContainerComponent } from '../container/container.component';

import { Component } from '@angular/core';

@Component({
  selector: 'app-code-card',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './code-card.component.html',
  styleUrl: './code-card.component.css'
})
export class CodeCardComponent {

}
