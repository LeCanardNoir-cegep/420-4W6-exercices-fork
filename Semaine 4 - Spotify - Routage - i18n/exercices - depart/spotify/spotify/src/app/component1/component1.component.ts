import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  param1?:string;

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.param1 = this.route.snapshot.paramMap.get("param1")!;
  }

}
