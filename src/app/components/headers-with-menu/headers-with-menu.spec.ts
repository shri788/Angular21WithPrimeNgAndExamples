import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersWithMenu } from './headers-with-menu';

describe('HeadersWithMenu', () => {
  let component: HeadersWithMenu;
  let fixture: ComponentFixture<HeadersWithMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadersWithMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadersWithMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
