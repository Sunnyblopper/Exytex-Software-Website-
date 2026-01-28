import { Component } from '@angular/core';
import { ErpSlider } from "../Component/ERP-Service/erp-slider/erp-slider";
import { ErpFaqArea } from "../Component/ERP-Service/erp-faq-area/erp-faq-area";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-erp-services-page',
    standalone: true,
    imports: [ErpSlider, ErpFaqArea, RouterModule],
    template: `
    <app-erp-slider></app-erp-slider>
    <app-erp-faq-area></app-erp-faq-area>
  `
})
export class ErpServicesComponent { }
