import { Project } from './project';

export class ProjectsService{

  p:Project[] = [
    new Project(1,"Processing Projects", "Programming", "https://github.com/daliife/ProcessingProjects","WIP", "Small and interesting visual programs to practise Processing"),
    new Project(2,"Pod Racers", "Videogame", "https://github.com/daliife/PodRacers","September 2019", "Videogame Prototype made with Unreal as a Final Master Project"),
    new Project(2,"AMIGO", "Videogame", "https://dalife.itch.io/amigo","April 2019", "Hyper-casual minimal minigolf videogame made with Unity"),
    new Project(3,"Instruments list", "Website", "http://rigiab.net/instrumentsmusicals/","October 2018", "Clean and simple catalan website to show and discover some instruments from the different families"),
    new Project(1,"Modifiable Clock", "Programming", "http://tracesof.net/uebersicht-widgets/#modifiable-clock","October 2018", "Modifiable clock widget for Übersicht app"),
    new Project(3,"CinemUp", "Website", "https://github.com/daliife/Cinemup","September 2017", "TV Recommender App created with Tizen Studio"),
    new Project(3,"Spotify Search", "Website", "https://github.com/daliife/SpotifySearch","May 2017", "Simple search and play web using Spotify API.")
  ];

  temp: Project[] = [];

  getRecentProjects(num_projects) : Project[]{
    return this.p.slice(0,num_projects);
  }

  getAllProjects() : Project[]{
    return this.p;
  }

  getProjectsByType(id) : Project[]{
    this.temp = [];
    for(let project in this.p){
      if(this.p[project].type == id) {
        this.temp.push(this.p[project]);
      }
    }
    return this.temp;
  }

}
