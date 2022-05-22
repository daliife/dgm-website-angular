import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationLink } from 'src/app/models/navigation-link.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() links: NavigationLink[] = [
    { title: '/About', url: '/about', icon: 'contacts' },
    { title: '/Projects', url: '/projects', icon: 'folder' },
    { title: '/Contact', url: '/contact', icon: 'share' }
  ];
  currentRoute: string;

  constructor(location: Location, router: Router) {
    this.currentRoute = location.path();
    router.events.subscribe(() => {
      this.currentRoute = location.path();
    });
  }
}
