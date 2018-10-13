import { Component } from '@angular/core';
import { InfoField } from './infoField';
import { Project } from './project';
import { AboutService } from './about.service';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  providers: [AboutService, ProjectsService],
  styles:[`
    .collapsible{
      background-color:white;
    }
    .collapsible-body{
      border-bottom: none!important;
    }
    .collapsible-header{
      background-color: white;
      transition: background-color 0.2s ease-out;
    }
    .collapsible-header:hover{
      background-color: #e1f5fe;
      transition: background-color 0.2s ease-out;
    }
    .collapsible{
      border-top: 0px solid #0277bd!important;
      border-left: 10px solid #0277bd!important;
      border-right: 10px solid #0277bd!important;
      border-bottom: 2px solid #0277bd!important;
    }
    .collapsible-header{
      border-top: 2px solid #0277bd!important;
      border-bottom: 0px solid #0277bd!important;
    }
    td a{
      text-decoration:none;
    }
    td a:hover{
      text-decoration: underline;
    }
    #downloadButton:hover{
      /*background-color: #e1f5fe!important;*/
      background-color: #0277bd!important;
      color: white!important;
    }
    #downloadButton{
      -webkit-box-shadow: none!important;
      -moz-box-shadow: none!important;
      box-shadow: none!important;
    }
  `]
})

export class AboutComponent{

  works:InfoField[];
  education:InfoField[];
  languages:InfoField[];
  projects:Project[];

  constructor(aboutService: AboutService, projectsService: ProjectsService){
    this.works = aboutService.getWorks();
    this.education = aboutService.getEducation();
    this.languages = aboutService.getLanguages();
    this.projects = projectsService.getRecentProjects(3);
  }

}
