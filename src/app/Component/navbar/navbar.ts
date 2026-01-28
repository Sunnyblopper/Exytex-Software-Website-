import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() hireClick = new EventEmitter<void>();

  isMenuOpen = false;
  isServicesOpen = false;

  openSideSlide() {
    this.hireClick.emit();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.isServicesOpen = false;
    }
  }

  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen;
  }
}
