import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFormsInputs } from './all-forms-inputs';

describe('AllFormsInputs', () => {
  let component: AllFormsInputs;
  let fixture: ComponentFixture<AllFormsInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFormsInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFormsInputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
