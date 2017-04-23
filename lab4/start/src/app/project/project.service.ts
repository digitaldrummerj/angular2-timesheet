import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExtHttp } from '../core/extHttp.service';
import { Project } from './Project';

@Injectable()
export class ProjectService {

  constructor(private http: ExtHttp) {}

  getProjects(): Observable<Project[]> {
    return this.http.get('/projects')
      .map((response) => response.json() as Project[]);
  }

  save(project: Project) {
    return this.http.post('/projects', project)
      .map((response) => response.json() as Project);
  }
}