import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-snackbars',
  imports: [ToastModule, ButtonModule],
  templateUrl: './snackbars.html',
  styleUrl: './snackbars.scss',
  providers: [MessageService]
})
export class Snackbars {
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Saved',
      detail: 'Data saved successfully',
      life: 3000
    });

    this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Success message' });
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Information' });
    this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Be careful' });
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
  }
}
