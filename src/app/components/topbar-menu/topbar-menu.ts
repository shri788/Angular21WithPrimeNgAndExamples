import { Component, OnInit, Type } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-topbar-menu',
  imports: [ButtonModule, MenubarModule, AvatarModule, MenuModule],
  templateUrl: './topbar-menu.html',
  styleUrl: './topbar-menu.scss',
})
export class TopbarMenu implements OnInit {
  
  items: MenuItem[] = [];
  profileItems: MenuItem[] = [];
  static TimePickers: readonly any[] | Type<any>;

  ngOnInit() {

    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      { label: 'Users', icon: 'pi pi-users', routerLink: '/users' },
      { label: 'Reports', icon: 'pi pi-chart-bar', routerLink: '/reports' },
      { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' }
    ];

    this.profileItems = [
      { label: 'Profile', icon: 'pi pi-user', command: () => this.openProfile() },
      { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.logout() }
    ];
  }

  openProfile() {
    console.log('Profile clicked');
  }

  logout() {
    console.log('Logout clicked');
  }
}
