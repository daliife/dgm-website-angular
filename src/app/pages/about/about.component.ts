import { Component } from '@angular/core';
import { AboutService } from './about.service';
import { ProjectsService } from '../../projects/projects.service';
import { InfoField } from 'src/app/models/infoField.model';

@Component({
  templateUrl: './about.component.html',
  providers: [AboutService, ProjectsService],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  works: InfoField[];
  education: InfoField[];
  languages: InfoField[];

  constructor(aboutService: AboutService, private projectsService: ProjectsService) {
    this.works = aboutService.getWorks();
    this.education = aboutService.getEducation();
    this.languages = aboutService.getLanguages();
  }

  onClickToggle(event: any): void {
    const showClassname = 'collapsible-header--shown';
    const liToEdit = event.target.parentElement.getElementsByClassName('collapsible-body')[0];
    const hasClass = liToEdit.classList.contains(showClassname);
    if (!hasClass) {
      liToEdit.classList.add(showClassname);
    } else {
      liToEdit.classList.remove(showClassname);
    }
  }
}
