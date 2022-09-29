import { Component, OnInit } from '@angular/core';
import {Artist} from "../artist";
import {CoreService} from "../core.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  artists!:Artist[];
  constructor(private _coreServ:CoreService) { }

  ngOnInit(): void {
    this.artists = this._coreServ.artists;
  }

}
