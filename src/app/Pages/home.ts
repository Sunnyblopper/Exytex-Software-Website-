import { Component } from '@angular/core';
import { Slider } from '../Component/Home/slider/slider';
import { DevelopmentArea } from '../Component/Home/development-area/development-area';
import { ServiceArea } from '../Component/Home/service-area/service-area';
import { ChooseArea } from '../Component/Home/choose-area/choose-area';
import { ChooseArea1 } from '../Component/Home/choose-area1/choose-area1';
import { CounterArea } from '../Component/Home/counter-area/counter-area';
import { ProjectArea } from '../Component/Home/project-area/project-area';
import { ChooseArea2 } from '../Component/Home/choose-area2/choose-area2';
import { ChooseArea3 } from '../Component/Home/choose-area3/choose-area3';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Slider,
    DevelopmentArea,
    ServiceArea,
    ChooseArea,
    ChooseArea1,
    CounterArea,
    ProjectArea,
    ChooseArea2,
    ChooseArea3
  ],
  template: `
    <app-slider></app-slider>
    <app-development-area></app-development-area>
    <app-service-area></app-service-area>
    <app-choose-area></app-choose-area>
    <app-choose-area1></app-choose-area1>
    <app-counter-area></app-counter-area>
    <app-project-area></app-project-area>
    <app-choose-area2></app-choose-area2>
    <app-choose-area3></app-choose-area3>
  `
})
export class HomeComponent { }
