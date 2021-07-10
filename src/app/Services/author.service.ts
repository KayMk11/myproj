import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
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
    return this.httpclient.post<Author>(this.baseURL + 'add', author, {headers});
  }
  updateAuthor(author: Author): Observable<any>{
    return this.httpclient.put<any>(this.baseURL + 'update', author);
  }

  deleteAuthor(authorid:number):Observable<{}>{
    return this.httpclient.delete(`${this.baseURL}delete/${authorid}`)
    .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.error('An error occurred:', httpError.error.message);
    } else {
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    return throwError('Something bad happened; Give correct data');
  }
}
