import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-autocomplete-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FloatLabelModule
  ],
  templateUrl: './autocomplete-field.html',
  styleUrls: ['./autocomplete-field.scss']
})
export class AutocompleteField implements OnInit {

  form!: FormGroup;

  // Simulated API data (can contain bad values)
  rawCities: any[] = [
    { name: 'Delhi', code: 'DEL' },
    { name: 'Mumbai', code: 'MUM' },
    { name: null, code: 'BAD1' },
    { name: 12345, code: 'BAD2' },
    { name: { text: 'Jaipur' }, code: 'BAD3' },
    { name: 'Chennai', code: 'CHE' }
  ];

  cities: City[] = [];
  filteredCities: City[] = [];

  ngOnInit(): void {

    // SANITIZE DATA → ALWAYS STRING (prevents PrimeNG crash)
    this.cities = this.rawCities.map(c => ({
      name: this.safeString(c.name),
      code: String(c.code ?? '')
    }));

    // IMPORTANT → initialize suggestions (prevents [object Object])
    this.filteredCities = [...this.cities];

    this.form = new FormGroup({
      city: new FormControl<City | null>(null, Validators.required),
      multiCity: new FormControl<City[]>([], Validators.required),
      disabledCity: new FormControl<City | null>({ value: null, disabled: true })
    });
  }

  // Convert ANY value → safe string
  safeString(val: any): string {
    if (val == null) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'number') return val.toString();
    if (typeof val === 'object') return val?.text ?? JSON.stringify(val);
    return String(val);
  }

  // Filter suggestions (safe)
  searchCity(event: any): void {
    const query = this.safeString(event.query).toLowerCase();

    this.filteredCities = this.cities.filter(c =>
      this.safeString(c.name).toLowerCase().includes(query)
    );
  }

  isInvalid(name: string): boolean {
    const c = this.form.get(name);
    return !!(c && c.invalid && (c.touched || c.dirty));
  }

  isValid(name: string): boolean {
    const c = this.form.get(name);
    return !!(c && c.valid && (c.touched || c.dirty));
  }
}