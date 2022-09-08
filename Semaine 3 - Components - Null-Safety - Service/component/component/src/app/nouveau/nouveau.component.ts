import {Component, Input, OnInit} from '@angular/core';
import {Cat} from "../app.component";

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent implements OnInit {

  constructor() { }

  @Input() chat?:Cat;

  ngOnInit(): void {
  }

}
