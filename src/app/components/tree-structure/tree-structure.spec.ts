import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeStructure } from './tree-structure';

describe('TreeStructure', () => {
  let component: TreeStructure;
  let fixture: ComponentFixture<TreeStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeStructure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeStructure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
