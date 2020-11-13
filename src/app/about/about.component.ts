import { Component } from '@angular/core';
import { InfoField } from '../infoField';
import { Project } from '../projects/project';
import { AboutService } from './about.service';
import { ProjectsService } from '../projects/projects.service';

@Component({
  templateUrl: './about.component.html',
  providers: [AboutService, ProjectsService],
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  works: InfoField[];
  education: InfoField[];
  languages: InfoField[];
  projects: Project[];

  constructor(aboutService: AboutService, projectsService: ProjectsService) {
    this.works = aboutService.getWorks();
    this.education = aboutService.getEducation();
    this.languages = aboutService.getLanguages();
    this.projects = projectsService.getRecentProjects(3);
  }
}
