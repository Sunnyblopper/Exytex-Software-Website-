import { Component } from '@angular/core';
import { TeamSlider } from '../Component/Team/team-slider/team-slider';
import { TeamTechArea } from '../Component/Team/team-tech-area/team-tech-area';
import { TeamAboutComponyArea } from '../Component/Team/team-about-compony-area/team-about-compony-area';

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [TeamSlider, TeamTechArea, TeamAboutComponyArea],
  template: `
    <app-team-slider></app-team-slider>
    <app-team-tech-area></app-team-tech-area>
    <app-team-about-compony-area></app-team-about-compony-area>
  `
})
export class TeamComponent {}
