import { Component, OnInit } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-pickers',
  imports: [DatePickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './time-pickers.html',
  styleUrl: './time-pickers.scss',
})
export class TimePickers implements OnInit {

  constructor(private fb: FormBuilder) {}
  time: Date | null = null;
  startTime: Date | null = null;
  endTime: Date | null = null;
  form: FormGroup | any;

  ngOnInit(): void {
    this.form = this.fb.group({
      time: [null]
    });
  }
  
}
