import { Component, OnInit } from '@angular/core';
import { InfoField } from '../infoField';
import { AboutService } from './about.service';
import { ProjectsService } from '../projects/projects.service';
declare var $: any;

@Component({
  templateUrl: './about.component.html',
  providers: [AboutService, ProjectsService],
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  works: InfoField[];
  education: InfoField[];
  languages: InfoField[];
  starredProjects: any[] = [];

  constructor(
    aboutService: AboutService,
    private projectsService: ProjectsService) {
    this.works = aboutService.getWorks();
    this.education = aboutService.getEducation();
    this.languages = aboutService.getLanguages();
    $('.collapsible').collapsible();
  }

  ngOnInit() {
    this.projectsService.getStarredProjects().subscribe(
      response => {
        response.forEach((element, index) => {
          this.projectsService.getRepoInfo(element.repo).subscribe(
            (data) => { this.starredProjects[index] = data; }
          );
        });
      },
      error => console.warn('Could not load projectsService', error),
      () => { }
    );
  }

}
