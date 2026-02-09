import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Project {
  url: string;
  title: string;
  description: string;
  image: string;
  client: string;
  category: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectData {
  private http = inject(HttpClient);
  private projectsUrl = '/projects_data.json';

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProjectBySlug(slug: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(p => p.url.endsWith(slug)))
    );
  }
}
