import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ProjectData, Project } from '../../../project-data';

@Component({
  selector: 'app-project-area',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-area.html',
  styleUrl: './project-area.css',
})
export class ProjectArea implements OnInit {
  private projectDataService = inject(ProjectData);
  projects: Project[] = [];

  ngOnInit(): void {
    this.projectDataService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  extractSlug(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1];
  }
}