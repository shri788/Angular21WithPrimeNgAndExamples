import {
  Component,
  HostListener,
  inject,
  signal,
  PLATFORM_ID,
  OnInit
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';

import { PrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import Aura from '@primeng/themes/aura';
import Material from '@primeng/themes/material';
import Nora from '@primeng/themes/nora';

import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrawerModule, ButtonModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected readonly title = signal('oneApp');

  private readonly primeng = inject(PrimeNG);
  private readonly platformId = inject(PLATFORM_ID);

  drawerVisible = false;
  isMobile = false;
  isBrowser = false;

  // Runs AFTER SSR → safe
  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.checkScreen();
    }
  }

  // Responsive check (SSR safe)
  @HostListener('window:resize')
  checkScreen() {
    if (!this.isBrowser) return;
    this.isMobile = window.innerWidth < 768;
  }

  // Theme Switch (PrimeNG new theme engine)
  setTheme(theme: string) {
    switch (theme) {
      case 'lara':
        this.primeng.theme.set({ preset: Lara });
        break;
      case 'aura':
        this.primeng.theme.set({ preset: Aura });
        break;
      case 'material':
        this.primeng.theme.set({ preset: Material });
        break;
      case 'nora':
        this.primeng.theme.set({ preset: Nora });
        break;
    }
  }

  toggleDark() {
    if (!this.isBrowser) return;
    document.body.classList.toggle('app-dark');
  }
}