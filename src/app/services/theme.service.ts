import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeSignal = signal<Theme>('light');
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
      
      effect(() => {
        const currentTheme = this.themeSignal();
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
      });
    }
  }

  private initTheme() {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      this.themeSignal.set(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.themeSignal.set(prefersDark ? 'dark' : 'light');

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.themeSignal.set(e.matches ? 'dark' : 'light');
      }
    });
  }

  toggleTheme() {
    this.themeSignal.update(current => current === 'light' ? 'dark' : 'light');
  }

  get isDark() {
    return this.themeSignal() === 'dark';
  }
}
