import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'null-satefy';

  nullTypeString: string | null | undefined;
  optionalString?: string;

  nullTypeCat: Cat | null | undefined;
  optionalCat?: Cat;

  test() {

    console.log(this.nullTypeString);
    console.log(this.optionalString);

  }

  setCats() {

    this.nullTypeCat = new Cat('Grigri');
    this.optionalCat = new Cat('Grigri jr.');

    /*this.nullTypeCat = new Cat();
    this.nullTypeCat.name = null;
    this.optionalCat = new Cat();
    this.optionalCat.name = null;*/


  }

}

class Cat {

  /*public name!:string | null;
  public age!:number | null;*/
  constructor(
    public name: string
  ) { }

}
