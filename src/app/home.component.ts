import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MaterializeDirective } from "angular2-materialize";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [`
    .centered {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .rsp{
      min-width: 100%;
      width:150%;
      opacity:0.05;
    }
    .sublink:hover{
       text-decoration: underline;
    }

  `]
})

export class HomeComponent { }
