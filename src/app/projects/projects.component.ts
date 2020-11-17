import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';

declare var M: any;

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  githubProjects: any[];

  constructor(private projectsService: ProjectsService) {
    this.projects = projectsService.getAllProjects();
  }

  public ngOnInit() {
    this.projectsService.getApiProjects().subscribe((data) => {
      this.githubProjects = data;
    });

    // const tabs = document.querySelectorAll('.tabs');
    // for (let i = 0; i < tabs.length; i++) {
    //   M.Tabs.init(tabs[i]);
    // }
  }
}
