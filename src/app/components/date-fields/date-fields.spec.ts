import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFields } from './date-fields';

describe('DateFields', () => {
  let component: DateFields;
  let fixture: ComponentFixture<DateFields>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateFields]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateFields);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
