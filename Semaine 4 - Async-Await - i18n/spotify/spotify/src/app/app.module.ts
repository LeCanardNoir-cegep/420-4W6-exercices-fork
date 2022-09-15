import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {path:"", redirectTo:"/cpt1", pathMatch:"full"},
      {path: "cpt1/:param1", component: Component1Component},
      {path: "cpt2", component: Component2Component},
      {path:"**", component:Component1Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
