import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datev-xsc-demo';

  constructor(zone: NgZone) {
    (window as any).ngZone = zone;
  }

 

}
