import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bookissue } from '../models/bookissue.model';

@Injectable({
  providedIn: 'root'
})
export class BookIssueService {
  private baseURL = 'http://localhost:8080/book'
  constructor(private httpclient: HttpClient) { }

  issueBook(bookId: number) {
    return this.httpclient.get(`${this.baseURL}/issue/${bookId}`).pipe(catchError(this.handleError))
  }
  returnBook(bookId: number) {
    return this.httpclient.get(`${this.baseURL}/return/${bookId}`).pipe(catchError(this.handleError))
  }
  borrowHistory() {
    return this.httpclient.get<Bookissue[]>(`${this.baseURL}/borrowhistory`).pipe(catchError(this.handleError))
  }
  borrowHistoryById(id: number) {
    return this.httpclient.get<Bookissue[]>(`${this.baseURL}/borrowhistory/${id}`).pipe(catchError(this.handleError))
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
