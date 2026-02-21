import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPop } from './dialog-pop';

describe('DialogPop', () => {
  let component: DialogPop;
  let fixture: ComponentFixture<DialogPop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
