import { Component } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroSectionComponent,AboutComponent,SkillsComponent,PortfolioComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-project';
}
