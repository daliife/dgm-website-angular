import { Project } from './project';

export class ProjectsService{

  p:Project[] = [
    new Project(1,"Cinemup", "../assets/cinemup.png", "https://github.com/daliife/Cinemup","September 2017", "TV Recommender App created with IDE TizenStudio. Getting the data from movie database API and unsing youtube iframe player and Slick carousel. "),
    new Project(1,"SASS Basics", "../assets/sassbasics.png", "https://github.com/daliife/SassBasics","September 2017", "Basic documentation about SASS style sheet language. Learned the basics of SASS thanks to a codeacademy website."),
    new Project(1,"Spotify Search", "../assets/spotifysearch.jpg", "https://github.com/daliife/SpotifySearch","May 2017", "Simple search and play web using spotify API. It needs a review because the retrieval functions are not working properly."),
    new Project(1,"MarioWebGL", "../assets/mariowebgl.jpg", "https://github.com/daliife/MarioWebGL","January 2017", "3D scene from Super Mario Bros in a web environment. This simple university project aimed to introduce programming in WebGL."),
    new Project(2,"HexCars", "../assets/hexcars.jpg", "https://hexcars.itch.io/hexcars","January 2017", "Videogame created with Unity."),
    new Project(2,"Think or Die", "../assets/thinkordie.png", "https://mediadomeprojects.com/jocspmm1/mddproductions/","September 2016", "Simple jumping platformer videogame created with Flash for a university project."),
    new Project(3,"Dishwasher helper", "../assets/dishwasherindicator.png", "https://www.dropbox.com/s/rwumourz73l3cfx/dishwasher_indicator.pdf?dl=0","September 2018", "What is your dishwasher state? You don't remember? Here the solution..."),
    new Project(3,"My own CV", "../assets/myowncv.png", "https://www.dropbox.com/s/dcyoh6cnv5stivq/3.%20CV_David_Gimeno.pdf?dl=0","September 2018", "Curriculum Vitae for my professional career created with Illustrator. Inspired with concepts from behance website, a great place to get ideas."),
    new Project(3,"OFB Poster", "../assets/ofbconcert.jpg", "https://www.dropbox.com/s/lys8a1zewfxr7pa/OFB_poster.jpg?dl=0","September 2018", "Poster design for a Barcelona flute ensemble/orchestra."),
    new Project(3,"Radiosarria Flyer", "../assets/radiosarria.jpg", "https://www.dropbox.com/s/bfw48j0ms5ms25g/Flyer_RadioSarria.jpg?dl=0","September 2018", "Flyer concept for promoting a web radio called RadioSarrià."),
    new Project(3,"Bottle labels", "../assets/bottlelabels.png", "https://www.dropbox.com/s/sqfg1keyqar75dz/bottle_labels.zip?dl=0","September 2018", "Design labels to use with diferent glass bottles.")
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
