import { Component } from '@angular/core';
import { InfoField } from './infoField.model';
import { AboutService } from './about.service';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  templateUrl: './about.component.html',
  providers: [AboutService, ProjectsService],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  works: InfoField[];
  education: InfoField[];
  languages: InfoField[];
  starredProjects: any[] = [];

  constructor(aboutService: AboutService, private projectsService: ProjectsService) {
    this.works = aboutService.getWorks();
    this.education = aboutService.getEducation();
    this.languages = aboutService.getLanguages();
  }

  onClickToggle(event: any): void {
    const showClassname = 'collapsible-header--shown';
    let liToEdit = event.target.parentElement.getElementsByClassName('collapsible-body')[0];
    let hasClass = liToEdit.classList.contains(showClassname);
    if (!hasClass) {
      liToEdit.classList.add(showClassname);
    } else {
      liToEdit.classList.remove(showClassname);
    }
  }
}
