import { Component } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    fadeInOutAnimation
  ]
})
export class NavbarComponent {
  showMenu = false;
  dropdownClick(): void {
    this.showMenu = !this.showMenu
  }
}