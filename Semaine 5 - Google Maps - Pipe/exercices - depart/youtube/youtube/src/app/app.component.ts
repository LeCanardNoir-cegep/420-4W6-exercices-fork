import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  API = "AIzaSyBr1DrIpkv-fPjIpPrIWBxGlfkdBP2O4HE";
  videoId = "6pbreU5ChmA";

  constructor(private sanitizer:DomSanitizer){}

  getUrl(){
    return `https://www.youtube.com/embed/${this.videoId}`;
  }

  getSafeUrl(){
    let url:string = this.getUrl()
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
