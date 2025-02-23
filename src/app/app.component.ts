import { Component, inject } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AboutMeComponent } from './web-components/about-me/about-me.component';
import { ExperienceComponent } from './web-components/experience/experience.component';
import { HeroComponent } from './web-components/hero/hero.component';
import { ProjectsComponent } from './web-components/projects/projects.component';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FooterComponent, HeaderComponent, AboutMeComponent, ExperienceComponent, HeroComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
  themeService: ThemeService = inject(ThemeService);
  
}
