import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-badges',
  imports: [BadgeModule, ButtonModule],
  templateUrl: './badges.html',
  styleUrl: './badges.scss',
})
export class Badges {
  count = 1;
}
