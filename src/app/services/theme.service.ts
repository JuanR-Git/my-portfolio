import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSignal = signal<string>("dark-mode");

  setTheme(theme: string) {
    this.themeSignal.set(theme);
  }

  // Simple ternary operator to switch between dark and light modes
  updateTheme() {
    this.themeSignal.update(value => (value === "dark-mode" ? 
    "light-mode" : "dark-mode"));
  }
}
