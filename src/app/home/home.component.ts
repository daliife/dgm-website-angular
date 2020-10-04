import { Component } from '@angular/core';

@Component({
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
      opacity:0.15;
    }
    .sublink:hover{
       text-decoration: underline;
    }
    h1{
      font-weight:700;
    }
  `]
})

export class HomeComponent { }
