import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-tooltips',
  imports: [TooltipModule, ButtonModule],
  templateUrl: './tooltips.html',
  styleUrl: './tooltips.scss',
})
export class Tooltips {
  tooltipText = 'Dynamic tooltip text';
}
