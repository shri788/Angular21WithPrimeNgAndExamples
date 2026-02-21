import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-fields',
  imports: [DatePickerModule, FloatLabelModule, ReactiveFormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './date-fields.html',
  styleUrl: './date-fields.scss',
})
export class DateFields {
  form!: FormGroup;

  today = new Date();
  minDate = new Date(2020, 0, 1);
  maxDate = new Date(2030, 11, 31);

  // example disabled dates
  disabledDates: Date[] = [
    new Date(2026, 1, 20),
    new Date(2026, 1, 25)
  ];

  ngOnInit() {
    this.form = new FormGroup({
      singleDate: new FormControl(null, Validators.required),
      dateRange: new FormControl(null, Validators.required),
      today: new FormControl(this.today, Validators.required)
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
