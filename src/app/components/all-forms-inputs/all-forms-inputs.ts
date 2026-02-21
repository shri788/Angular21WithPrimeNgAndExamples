import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
// import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';

import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select'; 

import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { SliderModule } from 'primeng/slider';
import { FileUploadModule } from 'primeng/fileupload';

import { InputMaskModule } from 'primeng/inputmask';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-all-forms-inputs',
  imports: [InputTextModule, InputNumberModule, PasswordModule, DatePickerModule, SelectModule, MultiSelectModule,
     CheckboxModule, RadioButtonModule, ToggleSwitchModule, ToggleButtonModule, SliderModule, FileUploadModule, 
     InputMaskModule, AutoCompleteModule, FormsModule, ReactiveFormsModule],
  templateUrl: './all-forms-inputs.html',
  styleUrl: './all-forms-inputs.scss',
})
export class AllFormsInputs implements OnInit {

  constructor(private fb: FormBuilder) {}

  form!: FormGroup;

roles = [
  { name: 'Admin' },
  { name: 'User' },
  { name: 'Manager' }
];

skills = ['Angular', 'PrimeNG', '.NET', 'SQL', 'Azure'];



ngOnInit() {
  this.form = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      salary: [0],
      address: [''],
      dob: [null],
      role: [null],
      skills: [[]],
      active: [false],
      gender: ['Male'],
      notify: [true],
      premium: [false],
      progress: [30],
      tags: [[]],
      phone: ['']
    });
  }

allSkills = ['Angular', 'PrimeNG', '.NET', 'SQL', 'Azure'];
filteredSkills: string[] = [];

filterSkills(event: any) {
  const query = event.query.toLowerCase();
  this.filteredSkills = this.allSkills.filter(s =>
    s.toLowerCase().includes(query)
  );
}

}
