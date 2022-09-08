import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'component';
  chat?: Cat = new Cat('pipo', 12);

  ngOnInit(): void {
  }
}

export class Cat{
  constructor(public name:string, public age:number) {
  }
}
