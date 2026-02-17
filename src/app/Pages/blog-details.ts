import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogData, BlogPost } from '../blog-data';
import { BlogSlider } from '../Component/Blog/blog-slider/blog-slider';
import { BlogDetailsArea } from '../Component/Blog/blog-details-area/blog-details-area';

@Component({
    selector: 'app-blog-details',
    standalone: true,
    imports: [CommonModule, BlogSlider, BlogDetailsArea],
    template: `
    <app-blog-slider></app-blog-slider>
    <app-blog-details-area [post]="post"></app-blog-details-area>
  `,
})
export class BlogDetailsComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private blogDataService = inject(BlogData);

    post?: BlogPost;

    ngOnInit(): void {
        const slug = this.route.snapshot.paramMap.get('slug');
        if (slug) {
            this.blogDataService.getBlogBySlug(slug).subscribe(post => {
                this.post = post;
            });
        }
    }
}
