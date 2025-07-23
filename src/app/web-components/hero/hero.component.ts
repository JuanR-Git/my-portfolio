import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  imports: [NgxTypedJsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  themeService: ThemeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.updateTheme();
  }
}
