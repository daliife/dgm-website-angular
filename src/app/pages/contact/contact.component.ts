import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    new Contact('/dgimeno', 'https://www.linkedin.com/in/dgimeno/', 'linkedin', 'linkedin'),
    new Contact('davidgimenomane@gmail.com', 'mailto:davidgimenomane@gmail.com', 'email', 'envelope'),
    new Contact('/daliife', 'https://github.com/daliife', 'github', 'github'),
    new Contact('@davidgimenomane', 'https://twitter.com/davidgimenomane', 'twitter', 'twitter'),
    new Contact('@dalife', 'https://dalife.itch.io/', 'itch.io', 'gamepad'),
    new Contact('/dalife', 'https://sketchfab.com/dalife', 'sketchfab', 'paint-brush')
  ];
}
