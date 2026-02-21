import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-checkboxes',
  imports: [CheckboxModule, FormsModule, CommonModule],
  templateUrl: './checkboxes.html',
  styleUrl: './checkboxes.scss',
})
export class Checkboxes {
  checked = false;
  skills = ['Angular', 'PrimeNG', '.NET', 'SQL'];
  selectedSkills: string[] = [];
}
