import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadWithDrag } from './file-upload-with-drag';

describe('FileUploadWithDrag', () => {
  let component: FileUploadWithDrag;
  let fixture: ComponentFixture<FileUploadWithDrag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadWithDrag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadWithDrag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
