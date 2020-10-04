import { Project } from './project';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  p: Project[] = [
    new Project(3, 'RFP Seat', 'website', 'https://github.com/daliife/rfp-seat', 'June 2020', 'Short interactive website for a client using canvas and parallax'),
    new Project(1, 'Processing Projects', 'programming', 'https://github.com/daliife/ProcessingProjects', 'WIP', 'Small and interesting visual scripts to practise Processing syntax'),
    new Project(2, 'Pod Racers', 'videogame', 'https://github.com/daliife/PodRacers', 'September 2019', 'Videogame prototype made with Unreal Engine as a Final Master Project'),
    new Project(2, 'A.MI.GO', 'videogame', 'https://dalife.itch.io/amigo', 'April 2019', 'Hyper-casual low-poly minigolf videogame prototype made with Unity 3D'),
    new Project(3, 'Instruments list', 'website', 'http://rigiab.net/instrumentsmusicals/', 'October 2018', 'Discover the different instrument families with this simple website'),
    new Project(1, 'Modifiable Clock', 'programming', 'http://tracesof.net/uebersicht-widgets/#modifiable-clock', 'October 2018', 'Modifiable clock widget for Übersicht app for Mac made with coffeescript'),
    new Project(3, 'CinemUp', 'website', 'https://github.com/daliife/Cinemup', 'September 2017', 'TV Recommender App created with Tizen Studio'),
    new Project(3, 'Spotify Search', 'website', 'https://github.com/daliife/SpotifySearch', 'May 2017', 'Simple search and play web using Spotify API'),
  ];

  temp: Project[] = [];

  getRecentProjects(num_projects): Project[] {
    return this.p.slice(0, num_projects);
  }

  getAllProjects(): Project[] {
    return this.p;
  }

  getProjectsByType(id): Project[] {
    this.temp = [];
    for (const project in this.p) {
      if (this.p[project].type === id) {
        this.temp.push(this.p[project]);
      }
    }
    return this.temp;
  }

}
