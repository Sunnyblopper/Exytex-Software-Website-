import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Component/navbar/navbar";
import { SideSlide } from "./Component/Home/side-slide/side-slide";
import { Footer } from "./Component/footer/footer";
import { CopyrightArea } from "./Component/copyright-area/copyright-area";
import { ErpSlider } from "./Component/ERP-Service/erp-slider/erp-slider";
import { ErpFaqArea } from "./Component/ERP-Service/erp-faq-area/erp-faq-area";
import { ProjectDataSlider } from "./Component/Project-Data/project-data-slider/project-data-slider";
import { ProjectDataFaqArea } from "./Component/Project-Data/project-data-faq-area/project-data-faq-area";

@Component({
  selector: 'app-root',
  imports: [Navbar, SideSlide, Footer, CopyrightArea, RouterOutlet, ErpSlider, ErpFaqArea, ProjectDataSlider, ProjectDataFaqArea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('developerz-pro');
}
