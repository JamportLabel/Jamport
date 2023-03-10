import { Component } from '@angular/core';
import { crossFade } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [crossFade]
})
export class AppComponent {
  title = 'Jamport';
}