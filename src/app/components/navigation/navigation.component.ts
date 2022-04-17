import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

export interface Link {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  route: string;
  links: Link[] = [
    { title: '/About', url: '/about', icon: 'contacts' },
    { title: '/Projects', url: '/projects', icon: 'folder' },
    { title: '/Contact', url: '/contact', icon: 'share' }
  ];

  constructor(location: Location, router: Router) {
    router.events.subscribe(() => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = '/';
      }
    });
  }
}
