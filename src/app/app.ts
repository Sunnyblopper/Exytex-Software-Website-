import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceArea } from "./Component/Home/service-area/service-area";
import { ChooseArea } from "./Component/Home/choose-area/choose-area";
import { ChooseArea1 } from "./Component/Home/choose-area1/choose-area1";
import { CounterArea } from "./Component/Home/counter-area/counter-area";
import { DevelopmentArea } from "./Component/Home/development-area/development-area";
import { ProjectArea } from "./Component/Home/project-area/project-area";
import { ChooseArea2 } from "./Component/Home/choose-area2/choose-area2";
import { ChooseArea3 } from './Component/Home/choose-area3/choose-area3';
import { Footer } from "./Component/footer/footer";
import { Slider } from "./Component/Home/slider/slider";
import { BlogSlider } from "./Component/Blog/blog-slider/blog-slider";
import { CopyrightArea } from "./Component/copyright-area/copyright-area";
import { BlogArea } from "./Component/Blog/blog-area/blog-area";
import { PortfolioSlider } from "./Component/Portfolio/portfolio-slider/portfolio-slider";
import { PortfolioArea } from "./Component/Portfolio/portfolio-area/portfolio-area";
import { PortfolioAudience } from "./Component/Portfolio/portfolio-audience/portfolio-audience";
import { TeamSlider } from "./Component/Team/team-slider/team-slider";
import { TeamTechArea } from "./Component/Team/team-tech-area/team-tech-area";
import { TeamAboutComponyArea } from "./Component/Team/team-about-compony-area/team-about-compony-area";
import { ContactSlider } from "./Component/Contact/contact-slider/contact-slider";
import { ContactMap } from "./Component/Contact/contact-map/contact-map";
import { ContactArea } from "./Component/Contact/contact-area/contact-area";

@Component({
  selector: 'app-root',
  imports: [ServiceArea, ChooseArea, ChooseArea1, CounterArea, DevelopmentArea, ProjectArea, ChooseArea2, ChooseArea3, Footer, Slider, BlogSlider, CopyrightArea, BlogArea, PortfolioSlider, PortfolioArea, PortfolioAudience, TeamSlider, TeamTechArea, TeamAboutComponyArea, ContactSlider, ContactMap, ContactArea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('developerz-pro');
}
