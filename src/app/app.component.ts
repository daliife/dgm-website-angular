import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'dgm-website-angular';
  showNavigation: boolean;

  constructor(location: Location, router: Router) {
    router.events.subscribe(() => {
      this.showNavigation = location.path() !== '';
    });
  }
}
