import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService],
})

export class ProjectsComponent implements OnInit{

  projects: Project[];

  githubProjects: any[];

  constructor(private projectsService: ProjectsService) {
    this.projects = projectsService.getAllProjects();
  }

  public ngOnInit() {
    this.projectsService.getApiProjects().subscribe(data => {
      this.githubProjects = data;
    });
  }

}
