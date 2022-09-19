import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'localStorage';
  artist = {name:'test', image:'unAutreTest.com'}
  ngOnInit(): void {
    
  }
  save(){
    localStorage.setItem('artist', JSON.stringify(this.artist))
  }
  load(){
    this.artist = JSON.parse(localStorage.getItem('artist')!);
  }
}
