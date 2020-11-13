import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {
  contacts = [
    new Contact('/dgimeno', 'https://www.linkedin.com/in/dgimeno/', 'linkedin', 'linkedin'),
    new Contact('david@gimeno.cat', 'mailto:david@gimeno.cat', 'email', 'envelope'),
    new Contact('/daliife', 'https://github.com/daliife', 'github', 'github'),
    new Contact('@davidgimenomane', 'https://twitter.com/davidgimenomane', 'twitter', 'twitter'),
    new Contact('@dalife', 'https://dalife.itch.io/', 'itch.io', 'gamepad'),
    new Contact('/dalife', 'https://sketchfab.com/dalife', 'sketchfab', 'paint-brush'),
  ];
}
