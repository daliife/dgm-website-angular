import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProjectsService {
  constructor(public http: HttpClient) { }

  getApiProjects(): Observable<any[]> {
    const pushedURL = 'https://api.github.com/users/daliife/repos?sort=pushed';
    return this.http.get<any[]>(pushedURL);
  }

  getRepoInfo(name): Observable<any[]> {
    const pushedURL = 'https://api.github.com/repos/daliife/' + name;
    return this.http.get<any[]>(pushedURL);
  }

  getStarredProjects(): Observable<any[]> {
    const pushedURL = 'https://gh-pinned-repos.now.sh/?username=daliife';
    return this.http.get<any[]>(pushedURL);
  }

}
