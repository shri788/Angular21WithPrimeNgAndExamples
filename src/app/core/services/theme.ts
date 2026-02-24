import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeLinkId = 'app-theme';

  themes = [
    { name: 'Lara Light Blue', file: 'lara-light-blue' },
    { name: 'Lara Light Indigo', file: 'lara-light-indigo' },
    { name: 'Lara Dark Blue', file: 'lara-dark-blue' },
    { name: 'Lara Dark Indigo', file: 'lara-dark-indigo' },
    { name: 'Aura Light', file: 'aura-light-blue' },
    { name: 'Aura Dark', file: 'aura-dark-blue' }
  ];

  changeTheme(themeFile: string) {
    const themeUrl = `node_modules/@primeng/themes/${themeFile}/theme.css`;

    let linkElement = document.getElementById(this.themeLinkId) as HTMLLinkElement;

    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.id = this.themeLinkId;
      linkElement.rel = 'stylesheet';
      document.head.appendChild(linkElement);
    }

    linkElement.href = themeUrl;
    localStorage.setItem('app-theme', themeFile);
  }

  loadSavedTheme() {
    const saved = localStorage.getItem('app-theme');
    if (saved) this.changeTheme(saved);
  }
}