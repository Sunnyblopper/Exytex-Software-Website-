import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-return-policy',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './return-policy.html',
    styleUrl: './return-policy.css'
})
export class ReturnPolicyComponent { }
