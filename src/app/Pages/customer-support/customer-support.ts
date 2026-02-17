import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-customer-support',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './customer-support.html',
    styleUrl: './customer-support.css'
})
export class CustomerSupportComponent { }
