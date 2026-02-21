import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-headers-with-menu',
  imports: [MenuModule, MenubarModule, InputTextModule, AvatarModule, BadgeModule, ButtonModule, ToolbarModule],
  templateUrl: './headers-with-menu.html',
  styleUrl: './headers-with-menu.scss',
})
export class HeadersWithMenu {
  items: MenuItem[] = [];
  profileItems: MenuItem[] = [];

  ngOnInit() {

    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      { label: 'Users', icon: 'pi pi-users', routerLink: '/users' },
      { label: 'Reports', icon: 'pi pi-chart-bar', routerLink: '/reports' },
      { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' }
    ];

    this.profileItems = [
      { label: 'Profile', icon: 'pi pi-user' },
      { label: 'Logout', icon: 'pi pi-sign-out' }
    ];
  }
}
