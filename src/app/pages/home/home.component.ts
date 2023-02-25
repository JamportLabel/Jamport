import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  roundedClick(): void {
    // Your code here
    console.log('Button clicked');  
  }
}
