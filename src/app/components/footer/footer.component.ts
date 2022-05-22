import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  year: string;

  constructor() {
    this.year = new Date().getFullYear().toString();
  }
}
