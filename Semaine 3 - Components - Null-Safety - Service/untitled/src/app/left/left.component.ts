import { Component, OnInit,  } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private data:DataService) { }
  artistename:string= "";

  ngOnInit(): void {
  }

  addArtiste(){
    console.log(this.artistename);
    this.data.artists.push(this.artistename);
    this.artistename="";
  }

}
