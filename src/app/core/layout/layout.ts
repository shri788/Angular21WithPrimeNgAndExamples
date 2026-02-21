import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './topbar/topbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterOutlet, Topbar, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
