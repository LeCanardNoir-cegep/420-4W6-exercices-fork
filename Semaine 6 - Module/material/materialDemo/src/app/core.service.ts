import { Injectable } from '@angular/core';
import {Artist} from "./artist";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  artists:Artist[] = [];

  constructor() { }
}
