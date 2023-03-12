import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist: any

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router) {}

  ngOnInit() {
    var artistName = this.route.snapshot.params['name'];
    this.dataService.getJsonData().subscribe(artists => {
      var artist = artists.find((item: { format_name: any; }) => item.format_name === artistName);
      if (!artist) {
        this.router.navigate(['/']);
      }
      else {
        this.artist = artist;
      }
    });
  }
}