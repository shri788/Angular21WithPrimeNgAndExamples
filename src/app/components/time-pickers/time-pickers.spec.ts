import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickers } from './time-pickers';

describe('TimePickers', () => {
  let component: TimePickers;
  let fixture: ComponentFixture<TimePickers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimePickers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
