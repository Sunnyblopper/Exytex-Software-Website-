import { Component } from '@angular/core';
import { AmazonSlider } from '../Component/Amazon-Services/amazon-slider/amazon-slider';
import { AmazonFaqArea } from '../Component/Amazon-Services/amazon-faq-area/amazon-faq-area';

@Component({
  selector: 'app-amazon-services-page',
  standalone: true,
  imports: [AmazonSlider, AmazonFaqArea],
  template: `
    <app-amazon-slider></app-amazon-slider>
    <app-amazon-faq-area></app-amazon-faq-area>
  `
})
export class AmazonServicesComponent {}
