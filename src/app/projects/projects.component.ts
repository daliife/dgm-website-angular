import { Component } from '@angular/core';
import { Project } from './project.model';
import { ProjectsService} from './projects.service';

@Component({
  templateUrl: './projects.component.html',
  providers: [ProjectsService],
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent {

  projects: Project[] = [];

  constructor(projectsService: ProjectsService) {
    this.projects = projectsService.getAllProjects();
  }

}
