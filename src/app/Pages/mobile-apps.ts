import { Component } from '@angular/core';
import { MobileSlider } from '../Component/Mobile-App/mobile-slider/mobile-slider';
import { MobileFaqArea } from '../Component/Mobile-App/mobile-faq-area/mobile-faq-area';

@Component({
  selector: 'app-mobile-apps-page',
  standalone: true,
  imports: [MobileSlider, MobileFaqArea],
  template: `
    <app-mobile-slider></app-mobile-slider>
    <app-mobile-faq-area></app-mobile-faq-area>
  `
})
export class MobileAppsComponent {}
