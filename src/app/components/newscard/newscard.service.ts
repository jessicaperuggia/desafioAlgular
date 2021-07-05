import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewscardService {

   baseUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {} 
  
  showMenssage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  showNews(): Observable<News[]> {
    return this.http.get<News[]>(this.baseUrl)
  }  
  
  showNewsById(id: string): Observable<News> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<News>(url)
  }
  
  createNews(news: News): Observable<News> {
    return this.http.post<News>(this.baseUrl, news)
  }
} 
