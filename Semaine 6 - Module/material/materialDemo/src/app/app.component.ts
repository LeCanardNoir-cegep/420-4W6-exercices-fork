import {Component, Input} from '@angular/core';
import {CoreService} from "./core.service";
import {Artist} from "./artist";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialDemo';

  constructor(private _coreServ:CoreService) {
  }

  addArtist(){
    this._coreServ.artists.push({name:"test", image:"https://www.liveabout.com/thmb/f1MqLsx3GKO-dzmmKgPmoBrFmGc=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-667156305-59befb3daf5d3a00102437f8.jpg"})
  }
}
