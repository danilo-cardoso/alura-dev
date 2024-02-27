import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ContainerComponent
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {

}
