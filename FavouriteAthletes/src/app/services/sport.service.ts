import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { content } from '../helper-files/contentDB';
import { Content } from '../helper-files/content-interface';
@Injectable({
  providedIn: 'root'
})
export class SportService {
 
 contentID:any ;
  constructor(  private http: HttpClient) { }


  getContentById(id: number): Observable<Content>|any {
    const file = content.find(f => f.id === id);
    const data = of(file);
    return data;
      
  }
}
