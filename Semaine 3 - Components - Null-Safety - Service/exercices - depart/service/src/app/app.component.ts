import { ArtistService } from './artist.service';
import { Component } from '@angular/core';
import { Artist } from './artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laboratoire';
  //artistName = "";

  constructor(public artistServ:ArtistService){}

  artists: Artist[] = this.artistServ.artists;
  
}