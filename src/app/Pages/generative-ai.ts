import { Component } from '@angular/core';
import { GenAiSlider } from "../Component/Generative-AI/gen-ai-slider/gen-ai-slider";
import { GenAiFaqArea } from "../Component/Generative-AI/gen-ai-faq-area/gen-ai-faq-area";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-generative-ai-page',
  standalone: true,
  imports: [GenAiSlider, GenAiFaqArea, RouterModule],
  template: `
    <app-gen-ai-slider></app-gen-ai-slider>
    <app-gen-ai-faq-area></app-gen-ai-faq-area>
  `
})
export class GenerativeAiComponent { }
