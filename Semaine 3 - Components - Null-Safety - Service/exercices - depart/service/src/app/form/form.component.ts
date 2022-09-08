import { ArtistService } from './../artist.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(public ArtistServ:ArtistService) { }

  ngOnInit(): void {
  }

  artistname!:string;

  add(name:string){
    this.ArtistServ.addArtist(name);
    //this.artistname="";
  }
}
