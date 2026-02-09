import { Component, Input } from '@angular/core';
import { Project } from '../../../project-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-data-faq-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-data-faq-area.html',
  styleUrl: './project-data-faq-area.css',
})
export class ProjectDataFaqArea {
  @Input() project?: Project;
}
