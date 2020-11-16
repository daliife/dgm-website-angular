import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Project } from './project.model';
import { projectsMock } from './projects.mock';

@Injectable()
export class ProjectsService {

  constructor(public http: HttpClient) { }

  getApiProjects(): Observable<any[]> {
    return this.http.get<any[]>("https://api.github.com/users/daliife/repos");
  }

  getRecentProjects(num_projects): Project[] {
    return projectsMock.slice(0, num_projects);
  }

  getAllProjects(): Project[] {
    return projectsMock;
  }

}
