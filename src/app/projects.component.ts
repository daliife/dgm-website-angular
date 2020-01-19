import { Component } from '@angular/core';
import { Project } from './project';
import { ProjectsService} from './projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  providers: [ProjectsService],
  styles:[`
    .card-content .card-title{
      margin-bottom:0px!important;
    }
    table.highlight > tbody > tr:hover{
      background-color:white;//#e1f5fe;
    }
    #projects-table{
      padding: 3rem;
    }
    .project-description{
      font-size:1.2rem;
    }
  `]
})

export class ProjectsComponent {
  projects1:Project[] = [];
  projects2:Project[] = [];
  projects3:Project[] = [];
  allprojects:Project[] = [];
  constructor(projectsService: ProjectsService){
    this.projects1 = projectsService.getProjectsByType(1);
    this.projects2 = projectsService.getProjectsByType(2);
    this.projects3 = projectsService.getProjectsByType(3);
    this.allprojects = projectsService.getAllProjects();
  }
}
