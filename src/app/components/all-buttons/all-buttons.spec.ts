import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllButtons } from './all-buttons';

describe('AllButtons', () => {
  let component: AllButtons;
  let fixture: ComponentFixture<AllButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllButtons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
