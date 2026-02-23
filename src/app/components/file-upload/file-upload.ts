import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-file-upload',
  imports: [
    CommonModule,
    FileUploadModule,
    ToastModule,
    ProgressBarModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss',
})
export class FileUpload {
  uploading = false;
  uploadProgress = 0;

  constructor(private http: HttpClient, private message: MessageService) {}

  uploadFiles(event: any) {

    const files: File[] = event.files;

    if (!files || files.length === 0) return;

    // create preview URL for images
    files.forEach((file: any) => {
      file.objectURL = URL.createObjectURL(file);
    });

    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    this.uploading = true;
    this.uploadProgress = 0;

    // 🔹 Replace with your real API
    this.http.post('https://jsonplaceholder.typicode.com/posts', formData, {
      reportProgress: true,
      observe: 'events'
    })
    .subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round((event.loaded / event.total) * 100);
        }

        if (event.type === HttpEventType.Response) {
          this.uploading = false;
          this.message.add({
            severity: 'success',
            summary: 'Upload Complete'
          });
        }
      },
      error: () => {
        this.uploading = false;
        this.message.add({
          severity: 'error',
          summary: 'Upload Failed'
        });
      }
    });
  }
}
