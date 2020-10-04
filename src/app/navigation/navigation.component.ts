import { Component, EventEmitter, Output} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [`
    .brand-logo img {
      height: 32px;
      vertical-align: middle;
    }
    .brand-logo {
        display: inline-block;
        height: 100%;
        transition: all 0.2s ease-in-out;
    }
    .brand-logo:hover {
      opacity: 0.75;
    }
    nav ul a {
      background-color: white;
      transition: all 0.2s ease-in-out;
    }
    nav ul a:hover {
      background-color: #e1f5fe;
    }
    .active{
      font-weight:bolder;
    }
    nav ul li a{
      font-size: 1.2rem;
    }
    .nav-wrapper{
      border-top: 3px solid #0277bd;
    }
  `],
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
    console.log('closing sidenav.');
  }

}
