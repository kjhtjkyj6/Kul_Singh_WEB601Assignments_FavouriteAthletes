import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentDb } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteAthletService {

  constructor(private messageService: MessageService) { }
  
  getContent(): Observable<any[]> {
    this.messageService.addMessage('Content array loaded!');
    return of(contentDb);
  }
  getContentById(id: number): Observable<any> {
    this.messageService.addMessage(`Content Item at id: ${id}`);
    return of(contentDb.find(content => content.id === id)); // find id 1
  }
}
