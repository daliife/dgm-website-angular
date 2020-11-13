import { Component, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent {

  @Output() sidenavActions: EventEmitter<any> = new EventEmitter<any>();
  sidenavParams = [];

  home = '/';
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = this.home;
      }
    });
  }

  closeSideNav() {
    // console.log('closing sidenav.');
  }

}
