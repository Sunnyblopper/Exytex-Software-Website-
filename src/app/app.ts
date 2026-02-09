import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Component/navbar/navbar";
import { SideSlide } from "./Component/Home/side-slide/side-slide";
import { Footer } from "./Component/footer/footer";
import { CopyrightArea } from "./Component/copyright-area/copyright-area";

@Component({
  selector: 'app-root',
  imports: [Navbar, SideSlide, Footer, CopyrightArea, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('developerz-pro');
}
