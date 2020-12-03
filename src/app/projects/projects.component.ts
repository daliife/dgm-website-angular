import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
declare var $: any;

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService],
})
export class ProjectsComponent implements OnInit {
  githubProjects: any[];
  tabOption = 0;
  starredProjects: any[] = [];

  constructor(private projectsService: ProjectsService) { }

  public ngOnInit() {
    this.projectsService.getApiProjects().subscribe((data) => {
      this.githubProjects = data;
    });

    $('.tabs').tabs();
  }
}
