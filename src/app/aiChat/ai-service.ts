import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OllamaResponse {
  response: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AiService {

  private apiUrl = 'http://localhost:11434/api/generate';

  constructor(private http: HttpClient) {}

  generate(prompt: string): Observable<OllamaResponse> {
    return this.http.post<OllamaResponse>(this.apiUrl, {
      model: 'deepseek-coder:6.7b',
      prompt: prompt,
      stream: false
    });
  }
}