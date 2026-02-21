import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFields } from './select-fields';

describe('SelectFields', () => {
  let component: SelectFields;
  let fixture: ComponentFixture<SelectFields>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFields]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFields);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
