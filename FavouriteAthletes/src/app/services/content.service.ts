import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private baseUrl = 'api/contents';

  constructor(private http: HttpClient) {}
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };

  getContents(): Observable<Content[]> {
    return this.http.get<Content[]>(this.baseUrl);
  }


  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.baseUrl, content , this.httpOptions);
  }


  updateContent(content: Content): Observable<any> {
    const url = `${this.baseUrl}/${content.id}`;
    return this.http.put(url, content);
  }

  deleteContent(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

}
