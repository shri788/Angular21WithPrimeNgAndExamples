import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snackbars } from './snackbars';

describe('Snackbars', () => {
  let component: Snackbars;
  let fixture: ComponentFixture<Snackbars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Snackbars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Snackbars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
