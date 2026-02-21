import { Component, OnInit } from '@angular/core';
import { Select, SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-fields',
  imports: [SelectModule, MultiSelectModule, 
    FloatLabelModule, ReactiveFormsModule, 
    CommonModule],
  templateUrl: './select-fields.html',
  styleUrl: './select-fields.scss',
})
export class SelectFields implements OnInit {
  form!: FormGroup;

  cities = [
    { name: 'Delhi', code: 'DEL' },
    { name: 'Mumbai', code: 'MUM' },
    { name: 'Jaipur', code: 'JAI' }
  ];

  skills = [
  { name: 'Angular', code: 'ANG' },
  { name: 'PrimeNG', code: 'PNG', disabled: true },   // ❌ Disabled
  { name: 'TypeScript', code: 'TS' },
  { name: 'RxJS', code: 'RX', disabled: true }        // ❌ Disabled
];

  ngOnInit() {
    this.form = new FormGroup({
      city: new FormControl(null, Validators.required),
      skills: new FormControl([], Validators.required),
      disabledSelect: new FormControl({ value: 'DEL', disabled: true })
    });
  }

  isInvalid(name: string): boolean {
    const c = this.form.get(name);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  isValid(name: string): boolean {
    const c = this.form.get(name);
    return !!(c && c.valid && (c.dirty || c.touched));
  }
}
