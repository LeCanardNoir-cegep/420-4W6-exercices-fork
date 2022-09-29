import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {DemoComponent} from "../demo/demo.component";

const route:Route[] = [
  {path:"", redirectTo:"/demo", pathMatch:"full"},
  {path:"demo", component:DemoComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
