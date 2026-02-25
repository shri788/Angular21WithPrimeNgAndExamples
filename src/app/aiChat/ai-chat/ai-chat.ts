import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AiService } from '../ai-service';

@Component({
  selector: 'app-ai-chat',
  imports: [FormsModule, CommonModule, InputTextModule, ButtonModule, AvatarModule, ProgressSpinnerModule, ScrollPanelModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.scss',
})
export class AiChat {

  message = '';
  loading = false;

  messages: { role: 'user' | 'ai', text: string }[] = [];

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;

  constructor(private ai: AiService) {}

  send() {
    if (!this.message.trim()) return;

    const userMsg = this.message;
    this.messages.push({ role: 'user', text: userMsg });
    this.message = '';
    this.loading = true;

    // this.scrollToBottom();

    this.ai.generate(userMsg).subscribe(res => {
      this.messages.push({ role: 'ai', text: res.response });
      this.loading = false;
      this.scrollToBottom();
    });
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.scrollContainer)
        this.scrollContainer.nativeElement.scrollTop =
          this.scrollContainer.nativeElement.scrollHeight;
    }, 50);
  }
}
