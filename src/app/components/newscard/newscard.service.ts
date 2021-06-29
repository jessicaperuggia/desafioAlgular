import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewscardService {

   baseUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {} 
    
    showNews(): Observable<News[]> {
      return this.http.get<News[]>(this.baseUrl)
    }   
  }

