import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectData, Project } from '../project-data';
import { ProjectDataSlider } from '../Component/Project-Data/project-data-slider/project-data-slider';
import { ProjectDataFaqArea } from '../Component/Project-Data/project-data-faq-area/project-data-faq-area';

@Component({
    selector: 'app-portfolio-details',
    standalone: true,
    imports: [CommonModule, ProjectDataSlider, ProjectDataFaqArea],
    template: `
    <app-project-data-slider [project]="project"></app-project-data-slider>
    <app-project-data-faq-area [project]="project"></app-project-data-faq-area>
  `,
})
export class PortfolioDetailsComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private projectDataService = inject(ProjectData);

    project?: Project;

    ngOnInit(): void {
        const slug = this.route.snapshot.paramMap.get('slug');
        if (slug) {
            this.projectDataService.getProjectBySlug(slug).subscribe(project => {
                this.project = project;
            });
        }
    }
}
