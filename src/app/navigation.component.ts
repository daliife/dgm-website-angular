import { Component, EventEmitter} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MaterializeDirective } from "angular2-materialize";
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styles:[`
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
      background-color: #e1f5fe!important;
    }
    .active{
      font-weight:bolder;
      text-decoration: underline;
    }

  `],
  outputs: ['sideNavActions']
})

export class NavigationComponent{

  sidenavActions:EventEmitter<any> = new EventEmitter<any>();
  sidenavParams = [];

  home: string = "/";
  route : string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = this.home;
      }
    });
  }

  closeSideNav(){
    console.log("closing sidenav.");
    //this.sidenavParams = ['hide'];
    //this.sidenavActions.emit('sideNav');
    //this.sidenavActions.emit({action: "sideNav", params: ['hide']});
  }

}
