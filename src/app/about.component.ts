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
    .profile-img{
      margin-bottom: 2rem;    
    }
    .left-align-text{
      text-align: left;
    }
    .collapsible{
      background-color:white;
      border: 0px solid #0277bd!important;
    }
    .collapsible-body{
      border-bottom: none!important;
      background: #e1f5fe;
    }
    .collapsible-header{
      background-color: #e1f5fe;
      transition: opacity 0.2s ease-in-out;
      border-top: 4px solid white!important;
      border-bottom: 0px solid white!important;
    }
    td a{
      text-decoration:none;
    }
    td a:hover{
      text-decoration: underline;
    }
    #downloadButton:hover{
      transform: scale(1.05);
    }
    #downloadButton{
      -webkit-box-shadow: none!important;
      -moz-box-shadow: none!important;
      box-shadow: none!important;
      border-radius: 0px;
      transform: scale(1);
      transition-duration: 0.2s;
    }
    .container .row {
      margin-left: 0px!important;
      margin-right: 0px!important;
    }
    #description{
      margin-bottom: 0px!important;
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
