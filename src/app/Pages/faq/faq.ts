import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './faq.html',
    styleUrl: './faq.css'
})
export class FaqComponent { }
