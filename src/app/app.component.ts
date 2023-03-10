import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("crossFade", [
      transition(":enter", [
        style({ opacity: 0 }), //<--state before enter animation begins
        animate("1000ms", style({ opacity: 1 }))  //<--animate to get opacity 1 in 1000ms
      ]),
      transition(":leave", [
        animate("1000ms", style({ opacity: 0 }))])  //<--animate to get opacity 0 in 1000ms
    ])
  ]
})
export class AppComponent {
  title = 'Jamport';
}