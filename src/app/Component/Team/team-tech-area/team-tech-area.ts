import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-tech-area',
  imports: [CommonModule],
  templateUrl: './team-tech-area.html',
  styleUrl: './team-tech-area.css',
})
export class TeamTechArea {
  teamMembers = [
    { name: 'Zohaib Arshad', role: 'Project Manager/ UK', img: '/image/zohaib.jpg' },
    { name: 'Ahsan Zaheer', role: 'Marketing Team Lead', img: '/image/ahsan.jpg' },
    { name: 'Zubair Shaukat', role: 'HR Manager', img: '/image/zubair.jpg' },
    { name: 'Khinsa Aziz', role: 'Team Leader', img: '/image/khinsa.jpg' },
    { name: 'Gulzaman Ali', role: 'Project Coordinator', img: '/image/gulzaman.jpg' }
  ];

}
