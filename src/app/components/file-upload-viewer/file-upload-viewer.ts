import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-file-upload-viewer',
  standalone: true,
  imports: [
    CommonModule,
    FileUploadModule,
    CardModule,
    ButtonModule,
    NgxExtendedPdfViewerModule
  ],
  templateUrl: './file-upload-viewer.html',
  styleUrls: ['./file-upload-viewer.scss']
})
export class FileUploadViewer {

  fileUrl: string | null = null;
  fileType: 'image' | 'pdf' | 'video' | 'unknown' = 'unknown';

  onSelect(event: any) {
    const file: File = event.files[0];
    if (!file) return;

    this.fileUrl = URL.createObjectURL(file);

    if (file.type.startsWith('image/')) {
      this.fileType = 'image';
    }
    else if (file.type === 'application/pdf') {
      this.fileType = 'pdf';
    }
    else if (file.type.startsWith('video/')) {
      this.fileType = 'video';
    }
    else {
      this.fileType = 'unknown';
    }
  }

  clear() {
    this.fileUrl = null;
    this.fileType = 'unknown';
  }
}