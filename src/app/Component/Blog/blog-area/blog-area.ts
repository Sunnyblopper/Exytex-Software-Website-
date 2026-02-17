import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogData, BlogPost } from '../../../blog-data';

@Component({
  selector: 'app-blog-area',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-area.html',
  styleUrl: './blog-area.css',
})
export class BlogArea implements OnInit {
  private blogDataService = inject(BlogData);
  blogs: BlogPost[] = [];

  ngOnInit(): void {
    this.blogDataService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });
  }
}
