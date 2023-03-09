import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


private message = new Subject<string>();
  messages$ = this.message.asObservable();

  constructor() { }

  addMessage(message: string): void {
    this.message.next(message);
  }
}