import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCalender } from './full-calender';

describe('FullCalender', () => {
  let component: FullCalender;
  let fixture: ComponentFixture<FullCalender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullCalender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCalender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
