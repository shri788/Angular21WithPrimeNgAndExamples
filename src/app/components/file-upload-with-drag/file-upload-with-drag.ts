import { Component, OnDestroy } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileSelectEvent, FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

/** Extend File to support preview URL */
type PreviewFile = File & {
  objectURL?: string;
};

@Component({
  standalone: true,
  selector: 'app-file-upload-with-drag',
  imports: [
    ProgressBarModule,
    FileUploadModule,
    CardModule,
    ToastModule,
    ButtonModule
  ],
  templateUrl: './file-upload-with-drag.html',
  styleUrls: ['./file-upload-with-drag.scss'],
  providers: [MessageService]
})
export class FileUploadWithDrag implements OnDestroy {

  uploading = false;
  uploadProgress = 0;

  /** Always keep real File objects with preview */
  selectedFiles: PreviewFile[] = [];

  constructor(private http: HttpClient, private toast: MessageService) {}

  // =====================================================
  // FILE SELECT (Drag or Choose)
  // =====================================================
  onSelect(event: FileSelectEvent | any) {
    console.log('Selected files:', event);
    if (!event?.files?.length) return;

    const files: FileList = event.files;
    // Convert PrimeNG wrapper → real File
    const dataFiles: PreviewFile[] = Array.from(files).map<PreviewFile>((f: any) => {
      const file: PreviewFile =
        f instanceof File ? f :
        f?.file instanceof File ? f.file :
        f;

      // Generate preview ONLY for image files safely
      if (file instanceof File && file.type?.startsWith('image/')) {
        try {
          file.objectURL = URL.createObjectURL(file);
        } catch {
          // Ignore non-blob case safely
        }
      }
      this.selectedFiles.push(file);
      return file;
    });
    console.log('Processed files with previews:', this.selectedFiles);
  }

  // =====================================================
  // REMOVE FILE
  // =====================================================
  removeFile(file: PreviewFile) {
    // Clean memory (important)
    if (file.objectURL) {
      URL.revokeObjectURL(file.objectURL);
    }

    this.selectedFiles = this.selectedFiles.filter(f => f !== file);
  }

  // =====================================================
  // UPLOAD FILES
  // =====================================================
  uploadFiles(event: any) {
    const files: PreviewFile[] = event?.files ?? this.selectedFiles;
    if (!files?.length) return;

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
      next: (e: any) => {
        if (e.type === HttpEventType.UploadProgress && e.total) {
          this.uploadProgress = Math.round((e.loaded / e.total) * 100);
        }

        if (e.type === HttpEventType.Response) {
          this.uploading = false;

          this.toast.add({
            severity: 'success',
            summary: 'Upload Complete'
          });

          this.clearFiles();
        }
      },
      error: () => {
        this.uploading = false;

        this.toast.add({
          severity: 'error',
          summary: 'Upload Failed'
        });
      }
    });
  }

  // =====================================================
  // CLEAR FILES
  // =====================================================
  clearFiles() {
    this.selectedFiles.forEach(file => {
      if (file.objectURL) {
        URL.revokeObjectURL(file.objectURL);
      }
    });
    this.selectedFiles = [];
  }

  // =====================================================
  // CLEANUP (Important)
  // =====================================================
  ngOnDestroy() {
    this.clearFiles();
  }
}