import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Project } from './project.model';
import { projectsMock } from './projects.mock';

@Injectable()
export class ProjectsService {
  constructor(public http: HttpClient) {}

  getApiProjects(): Observable<any[]> {
    const pushedURL = 'https://api.github.com/users/daliife/repos?sort=pushed';
    return this.http.get<any[]>(pushedURL);
  }

  getRecentProjects(num_projects): Project[] {
    return projectsMock.slice(0, num_projects);
  }

  getAllProjects(): Project[] {
    return projectsMock;
  }
}
