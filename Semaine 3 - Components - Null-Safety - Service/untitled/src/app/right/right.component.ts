import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor(public data:  DataService) { }

  @Input()artists!:string[];

  ngOnInit(): void {
   this.artists = this.data.artists;
  }

}
