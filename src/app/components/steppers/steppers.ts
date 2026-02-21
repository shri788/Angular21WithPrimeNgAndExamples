import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steppers',
  imports: [StepperModule, ButtonModule, InputTextModule, FormsModule, ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './steppers.html',
  styleUrl: './steppers.scss',
})
export class Steppers implements OnInit {
  constructor(private fb: FormBuilder) { }

  step = 0;
  form: FormGroup | any

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      city: ['']
    });
  }
}
