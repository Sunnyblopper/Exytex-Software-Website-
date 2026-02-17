import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../../../blog-data';

@Component({
    selector: 'app-blog-details-area',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './blog-details-area.html',
    styleUrl: './blog-details-area.css',
})
export class BlogDetailsArea {
    @Input() post?: BlogPost;
}
