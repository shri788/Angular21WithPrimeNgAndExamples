import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steppers } from './steppers';

describe('Steppers', () => {
  let component: Steppers;
  let fixture: ComponentFixture<Steppers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Steppers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Steppers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
