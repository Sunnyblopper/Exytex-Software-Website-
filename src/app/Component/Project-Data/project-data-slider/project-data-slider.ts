import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../project-data';

@Component({
  selector: 'app-project-data-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-data-slider.html',
  styleUrl: './project-data-slider.css',
})
export class ProjectDataSlider {
  @Input() project?: Project;
}
