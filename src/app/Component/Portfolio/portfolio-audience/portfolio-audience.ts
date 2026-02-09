import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectData, Project } from '../../../project-data';

@Component({
  selector: 'app-portfolio-audience',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio-audience.html',
  styleUrl: './portfolio-audience.css',
})
export class PortfolioAudience implements OnInit {
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
