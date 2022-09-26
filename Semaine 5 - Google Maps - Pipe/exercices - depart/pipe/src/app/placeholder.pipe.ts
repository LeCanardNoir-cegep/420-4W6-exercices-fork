import { LibraryService } from './library.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {

  constructor(private libServ:LibraryService){}

  transform(url: any, choix: string): string {    
    if(url === undefined){
      url = choix === "oiseau" ? this.libServ.OISEAU : this.libServ.CHAT ;
    }
    return url;
  }
}
