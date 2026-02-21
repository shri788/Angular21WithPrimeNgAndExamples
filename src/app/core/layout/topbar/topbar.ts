import { AfterViewInit, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

/* PrimeNG Components */
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';

/* Angular */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,   // 🔥 THIS IS REQUIRED
  imports: [
    MenubarModule,
    MenuModule,
    AvatarModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.scss']   // also fix this (plural)
})
export class Topbar implements AfterViewInit {
  isBrowserReady = false;

  avatarItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' },
    { separator: true },
    { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.logout() }
  ];
  
  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: '/dashboard'
    },
    {
      label: 'Management',
      icon: 'pi pi-briefcase',
      items: [
        { label: 'Users', icon: 'pi pi-users', routerLink: '/users' },
        {
          label: 'Projects',
          icon: 'pi pi-folder',
          items: [
            { label: 'Active Projects', routerLink: '/projects/active' },
            { label: 'Archived Projects', routerLink: '/projects/archive' }
          ]
        }
      ]
    },
    {
      label: 'Reports',
      icon: 'pi pi-chart-bar',
      items: [
        { label: 'Daily', routerLink: '/reports/daily' },
        { label: 'Monthly', routerLink: '/reports/monthly' }
      ]
    }
  ];

  get initials(): string {
    const name = 'Radhe Shyam';
    return name.split(' ').map(x => x[0]).join(' ').toUpperCase();
  }

  logout() {
    localStorage.clear();
    location.href = '/login';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isBrowserReady = true;
      console.log('Browser is ready, Topbar component initialized.');
    });
  }
}
