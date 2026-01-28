import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Component/navbar/navbar";
import { SideSlide } from "./Component/Home/side-slide/side-slide";
import { Footer } from "./Component/footer/footer";
import { CopyrightArea } from "./Component/copyright-area/copyright-area";
import { ErpSlider } from "./Component/ERP-Service/erp-slider/erp-slider";
import { ErpFaqArea } from "./Component/ERP-Service/erp-faq-area/erp-faq-area";

@Component({
  selector: 'app-root',
  imports: [Navbar, SideSlide, Footer, CopyrightArea, RouterOutlet, ErpSlider, ErpFaqArea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('developerz-pro');
}
