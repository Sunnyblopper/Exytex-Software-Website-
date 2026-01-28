import { Component } from '@angular/core';
import { ServiceSlider } from '../Component/Service/service-slider/service-slider';
import { ServiceSectionArea } from '../Component/Service/service-section-area/service-section-area';
import { ServiceSection } from '../Component/Service/service-section/service-section';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [ServiceSlider, ServiceSectionArea, ServiceSection],
  template: `
    <app-service-slider></app-service-slider>
    <app-service-section-area></app-service-section-area>
    <app-service-section></app-service-section>
  `
})
export class ServiceComponent {}
