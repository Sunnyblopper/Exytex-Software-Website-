import { Component } from '@angular/core';
import { SeoSlider } from '../Component/SEO/seo-slider/seo-slider';
import { SeoFaqArea } from '../Component/SEO/seo-faq-area/seo-faq-area';

@Component({
  selector: 'app-seo-services-page',
  standalone: true,
  imports: [SeoSlider, SeoFaqArea],
  template: `
    <app-seo-slider></app-seo-slider>
    <app-seo-faq-area></app-seo-faq-area>
  `
})
export class SeoServicesComponent { }
