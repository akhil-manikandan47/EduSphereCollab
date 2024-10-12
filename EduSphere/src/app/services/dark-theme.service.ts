import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  private darkThemeClass = 'dark-theme';

  constructor() {
    // Apply the theme on load based on stored preference
    this.loadThemeFromLocalStorage();
  }

  toggleDarkTheme() {
    const isDark = !this.isDarkTheme();
    this.applyTheme(isDark);
  }

  isDarkTheme(): boolean {
    return document.body.classList.contains(this.darkThemeClass);
  }


  private applyTheme(isDark: boolean) {
    if (isDark) {
      document.body.classList.add(this.darkThemeClass);
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove(this.darkThemeClass);
      localStorage.setItem('theme', 'light');
    }
  }

  loadThemeFromLocalStorage() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.applyTheme(true);
    } else {
      this.applyTheme(false);
    }
  }
}