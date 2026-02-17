import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    image: string;
    description: string;
    content: string;
}

@Injectable({
    providedIn: 'root',
})
export class BlogData {
    private http = inject(HttpClient);
    private blogUrl = '/blog_data.json';

    getBlogs(): Observable<BlogPost[]> {
        return this.http.get<BlogPost[]>(this.blogUrl);
    }

    getBlogBySlug(slug: string): Observable<BlogPost | undefined> {
        return this.getBlogs().pipe(
            map(blogs => blogs.find(b => b.slug === slug))
        );
    }
}
