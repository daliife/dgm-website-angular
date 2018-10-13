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
    }
    nav ul a:hover {
      background-color: rgba(225,245,254, 1)!important;
      transition: background-color 0.2s linear;
    }
    nav ul li.active{
      background-color: rgba(225,245,254, 0.45)!important;
      /*border-bottom: 4px solid #0277bd!important;*/
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
