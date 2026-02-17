import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-team-page',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './team.html',
    styleUrl: './team.css'
})
export class TeamComponent { }
