import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artists: any;

  constructor(private dataService: DataService, /*private titleService: Title*/) { 
    /*this.titleService.setTitle('Gay')*/
  }

  ngOnInit() {
    this.dataService.getJsonData().subscribe(data => {
      this.artists = data;
      console.log(this.artists);
    });
  }

  roundedClick(): void {
    document.getElementById('Seperator')!.scrollIntoView();
  }


}
