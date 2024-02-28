import { CodeCardComponent } from './../../components/code-card/code-card.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ContainerComponent,
    CodeCardComponent
  ],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent {

}
