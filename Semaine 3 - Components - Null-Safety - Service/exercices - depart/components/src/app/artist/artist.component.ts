import {Component, Input, OnInit} from '@angular/core';
import {Artist} from "../app.component";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  @Input() artist!:Artist;

  ngOnInit(): void {
  }

}
