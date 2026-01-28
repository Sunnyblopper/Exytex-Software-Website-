import { Component } from '@angular/core';
import { MarketingSlider } from '../Component/Digital-Marketing/marketing-slider/marketing-slider';
import { MarketingFaqArea } from '../Component/Digital-Marketing/marketing-faq-area/marketing-faq-area';

@Component({
  selector: 'app-digital-marketing-page',
  standalone: true,
  imports: [MarketingSlider, MarketingFaqArea],
  template: `
    <app-marketing-slider></app-marketing-slider>
    <app-marketing-faq-area></app-marketing-faq-area>
  `
})
export class DigitalMarketingComponent {}
