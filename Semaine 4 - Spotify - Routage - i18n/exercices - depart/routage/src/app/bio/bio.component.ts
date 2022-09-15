import {Component, Input, OnInit} from '@angular/core';
import {Artist, ARTISTS} from "../artist";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'artist-bio',
    templateUrl: './bio.component.html'
})
export class BioComponent implements OnInit{
    artistId?:string;
    artist?: Artist;

    constructor(public route:ActivatedRoute) {
    }

  ngOnInit(): void {
      this.artistId = this.route.snapshot.paramMap.get('artist')!;
      this.artist = ARTISTS[+this.artistId -1];
  }
}
