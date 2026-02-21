import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  imports: [InputTextModule, InputNumberModule, 
    ReactiveFormsModule, FloatLabelModule, 
    ButtonModule, CommonModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField implements OnInit {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      textValue: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      numberValue: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000)
      ]),

      decimalValue: new FormControl(null, [
        Validators.required,
        Validators.min(0.01),
        Validators.max(1000)
      ])
    });
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && (control?.touched || control?.dirty);
  }

  isValid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.valid && (control?.touched || control?.dirty);
  }  
}
