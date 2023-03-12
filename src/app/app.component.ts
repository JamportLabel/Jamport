import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { crossFadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    crossFadeAnimation
  ]
})
export class AppComponent {
  title = 'Jamport';
}