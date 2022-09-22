import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoGoogleMaps';
  center: google.maps.LatLngLiteral = {lat: -33.445831, lng: -70.65407779999998};
  zoom = 5;

  myDate = new Date('2022-11-03T21:00:00');

  markerPositions: google.maps.LatLngLiteral[] = [
    {lat: -33.445831, lng: -70.65407779999998},
  ];
}
