import { Component } from '@angular/core';
import { GraphicSlider } from '../Component/Graphic-Designing/graphic-slider/graphic-slider';
import { GraphicFaqArea } from '../Component/Graphic-Designing/graphic-faq-area/graphic-faq-area';

@Component({
  selector: 'app-graphic-designing-page',
  standalone: true,
  imports: [GraphicSlider, GraphicFaqArea],
  template: `
    <app-graphic-slider></app-graphic-slider>
    <app-graphic-faq-area></app-graphic-faq-area>
  `
})
export class GraphicDesigningComponent {}
