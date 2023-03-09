import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class AppMessagesComponent {


messages: string[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.messages$.subscribe((message: string) => {
      this.messages=[];
      this.messages.push(message);
    });
  }
}
