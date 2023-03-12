import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artists: any;
  artistName: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.artistName = this.route.snapshot.params['name'];
    this.dataService.getJsonData().subscribe(data => {
      this.artists = data;
      if (!this.artists.some((item: { format_name: any; }) => item.format_name === this.artistName)) {
        this.router.navigate(['/']);
      }
    });
  }
}