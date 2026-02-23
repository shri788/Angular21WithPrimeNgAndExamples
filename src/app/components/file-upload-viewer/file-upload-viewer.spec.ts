import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadViewer } from './file-upload-viewer';

describe('FileUploadViewer', () => {
  let component: FileUploadViewer;
  let fixture: ComponentFixture<FileUploadViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
