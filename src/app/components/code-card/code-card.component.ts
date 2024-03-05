import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { ContainerComponent } from '../container/container.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-code-card',
  standalone: true,
  imports: [
    ContainerComponent,
    CommonModule,
    FormsModule,
    HighlightModule
  ],
  templateUrl: './code-card.component.html',
  styleUrl: './code-card.component.css'
})
export class CodeCardComponent {

  @Input() color: string = '#9AFF6B'
  @Input() isHighlighted: boolean = true
  @Output() codeEmitter = new EventEmitter<string>()

  code: string = ''

  constructor() { }

  autoSizeTextArea(e: any) {
    e.target.style.height = '0px'
    e.target.style.height = e.target.scrollHeight + 'px'
  }

  generateCode() {
    this.codeEmitter.emit(this.code)
  }
}
