import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { TextareaModule } from 'primeng/textarea';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    InputMaskModule,
    SelectModule,
    MultiSelectModule,
    AutoCompleteModule,
    DatePickerModule,
    RadioButtonModule,
    CheckboxModule,
    InputNumberModule,
    FileUploadModule,
    TextareaModule,
    ToggleButtonModule,
    SliderModule,
    RatingModule,
    ButtonModule,
    CardModule,
    DividerModule,
    ToastModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  providers: [MessageService]
})
export class Register {
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);

  departments = [
    { label: 'Computer Science', value: 'CS' },
    { label: 'Mechanical', value: 'ME' },
    { label: 'Civil', value: 'CE' },
    { label: 'Electrical', value: 'EE' },
    { label: 'MBA', value: 'MBA' }
  ];

  skills = [
    { label: 'Java', value: 'Java' },
    { label: 'Angular', value: 'Angular' },
    { label: 'Python', value: 'Python' },
    { label: 'C++', value: 'C++' },
    { label: 'Machine Learning', value: 'ML' }
  ];

  countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
  filteredCountries: string[] = [];

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    dob: [null, Validators.required],
    gender: ['', Validators.required],
    department: [null, Validators.required],
    skills: [[]],
    country: [''],
    cgpa: [null],
    hostel: [false],
    bio: [''],
    satisfaction: [3]
  });

  searchCountry(event: any) {
    const query = event.query.toLowerCase();
    this.filteredCountries = this.countries.filter(c =>
      c.toLowerCase().includes(query)
    );
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Student Registered Successfully!'
    });

    console.log(this.form.value);
  }
}
