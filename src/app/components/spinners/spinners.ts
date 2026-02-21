import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-spinners',
  imports: [ProgressSpinnerModule, ProgressBarModule, SkeletonModule, ButtonModule],
  templateUrl: './spinners.html',
  styleUrl: './spinners.scss',
})
export class Spinners {
  loading = false;
}
