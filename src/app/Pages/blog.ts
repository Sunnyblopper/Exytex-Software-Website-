import { Component } from '@angular/core';
import { BlogSlider } from '../Component/Blog/blog-slider/blog-slider';
import { BlogArea } from '../Component/Blog/blog-area/blog-area';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [BlogSlider, BlogArea],
  template: `
    <app-blog-slider></app-blog-slider>
    <app-blog-area></app-blog-area>
  `
})
export class BlogComponent {}
