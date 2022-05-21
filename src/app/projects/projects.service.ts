import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  username = 'daliife';

  constructor(private http: HttpClient) {}

  getApiProjects(): Observable<any[]> {
    const projectsURL = 'https://api.github.com/users/daliife/repos?sort=pushed';
    return this.http.get<any[]>(projectsURL);
  }

  getRepoInfo(name: string): Observable<any[]> {
    const reposURL = 'https://api.github.com/repos/daliife/' + name;
    return this.http.get<any[]>(reposURL);
  }

  getStarredProjects(): Observable<any[]> {
    const starredURL = 'https://gh-pinned-repos.now.sh/?username=daliife';
    return this.http.get<any[]>(starredURL);
  }
}
