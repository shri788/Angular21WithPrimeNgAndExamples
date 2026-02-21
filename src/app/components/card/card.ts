import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-card',
  imports: [CardModule, ButtonModule, AvatarModule, DividerModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

}
