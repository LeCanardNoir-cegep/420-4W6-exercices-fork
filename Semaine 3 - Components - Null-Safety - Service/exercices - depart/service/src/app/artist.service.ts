import { Injectable } from '@angular/core';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }
  
  artists: Artist[] = [
    new Artist("The Black Keys"),
    new Artist("MorMor"),
    new Artist("Parcels"),
    new Artist("Glass Animals"),
    new Artist("Mating Ritual"),
  ];

  addArtist(name:string): void {
    this.artists!.push(new Artist(name));
  }
}
