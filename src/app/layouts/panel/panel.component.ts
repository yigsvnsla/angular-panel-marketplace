import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import SidenavComponent from 'src/app/components/sidenav/sidenav.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent
  ],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export default class PanelComponent {

}
