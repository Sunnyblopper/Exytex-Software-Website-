import { Component } from '@angular/core';
import { ContactSlider } from '../Component/Contact/contact-slider/contact-slider';
import { ContactMap } from '../Component/Contact/contact-map/contact-map';
import { ContactArea } from '../Component/Contact/contact-area/contact-area';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactSlider, ContactMap, ContactArea],
  template: `
    <app-contact-slider></app-contact-slider>
    <app-contact-map></app-contact-map>
    <app-contact-area></app-contact-area>
  `
})
export class ContactComponent {}
