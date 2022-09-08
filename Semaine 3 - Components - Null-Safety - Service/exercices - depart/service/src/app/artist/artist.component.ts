import { Artist } from './../artist';
import { Component, Input, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(public ArtistServ:ArtistService) { }

  ngOnInit(): void {
  }

  @Input()artist!:Artist;

}
