import { Component } from '@angular/core';
import { WebSlider } from '../Component/Web-Development/web-slider/web-slider';
import { WebFaqArea } from '../Component/Web-Development/web-faq-area/web-faq-area';

@Component({
  selector: 'app-web-development-page',
  standalone: true,
  imports: [WebSlider, WebFaqArea],
  template: `
    <app-web-slider></app-web-slider>
    <app-web-faq-area></app-web-faq-area>
  `
})
export class WebDevelopmentComponent {}
