import { Component } from '@angular/core';
import { PortfolioSlider } from '../Component/Portfolio/portfolio-slider/portfolio-slider';
import { PortfolioArea } from '../Component/Portfolio/portfolio-area/portfolio-area';
import { PortfolioAudience } from '../Component/Portfolio/portfolio-audience/portfolio-audience';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [PortfolioSlider, PortfolioArea, PortfolioAudience],
  template: `
    <app-portfolio-slider></app-portfolio-slider>
    <app-portfolio-area></app-portfolio-area>
    <app-portfolio-audience></app-portfolio-audience>
  `
})
export class PortfolioComponent {}
