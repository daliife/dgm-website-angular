import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';
declare var $: any;

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  githubProjects: any[];

  tabOption = 1;

  constructor(private projectsService: ProjectsService) {
    this.projects = projectsService.getAllProjects();
  }

  public ngOnInit() {
    this.projectsService.getApiProjects().subscribe((data) => {
      this.githubProjects = data;
    });
    $('.tabs').tabs();
  }
}
