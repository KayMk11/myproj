import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Author } from '../models/author.model';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private baseURL = "http://localhost:8080/author/";

  constructor(private httpclient: HttpClient) { }
  getAuthorsAll(): Observable<Author[]> {
    return this.httpclient.get<Author[]>(this.baseURL + 'search/all')
  }
  getAuthorById(id: number): Observable<Author> {
    return this.httpclient.get<Author>(this.baseURL + 'search/' + id)
  }
  searchNameLike(query: string): Observable<Author[]> {
    return this.httpclient.get<Author[]>(this.baseURL + 'search/name/contains/' + query)
  }
  searchNamesw(query: string): Observable<Author[]> {
    return this.httpclient.get<Author[]>(this.baseURL + 'search/name/startswith/' + query)
  }
  searchNameew(query: string): Observable<Author[]> {
    return this.httpclient.get<Author[]>(this.baseURL + 'search/name/endswith/' + query)
  }
  addAuthor(author: Author): Observable<any> {
    return this.httpclient.post<Author>(this.baseURL + 'add', author);
  }
}
