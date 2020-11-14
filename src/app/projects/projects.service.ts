import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { projectsMock } from './projects.mock';

@Injectable()
export class ProjectsService {

  projects: Project[] = projectsMock;

  getRecentProjects(num_projects): Project[] {
    return this.projects.slice(0, num_projects);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }

  getProjectsByType(id: number): Project[] {
    const temp = [];
    for (const project in this.projects) {
      if (this.projects[project].type === id) {
        temp.push(this.projects[project]);
      }
    }
    return temp;
  }

}
