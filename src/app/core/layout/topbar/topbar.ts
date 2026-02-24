import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';

/* PrimeNG Components */
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';

/* Angular */
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MenubarModule,
    MenuModule,
    AvatarModule,
    CommonModule,
    RouterModule
],
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.scss']
})
export class Topbar implements AfterViewInit {
  private readonly cd = inject(ChangeDetectorRef);
  private readonly router = inject(Router);

  isBrowserReady = false;

  avatarItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' },
    { separator: true },
    { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.logout() },
    { label: 'Log In', icon: 'pi pi-sign-out', command: () => this.login() }
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
      this.cd.detectChanges();
      console.log('Browser is ready, Topbar component initialized.');
    });
  }

  login() {
    this.router.navigateByUrl('/login');
  }
}
