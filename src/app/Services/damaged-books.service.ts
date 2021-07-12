import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DamagedBook } from './../models/damagedBook.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DamagedBooks } from '../DamagedBook/DamagedBook.model';
@Injectable({
  providedIn: 'root'
})
export class DamagedBooksService {
  private baseUrl = 'http://localhost:8080/damagedbooks';
  constructor(private httpclient: HttpClient) { }

  addDamagedBook(damagedbook: DamagedBooks): Observable<DamagedBook> {
    return this.httpclient.post<DamagedBook>(`${this.baseUrl}/add`, damagedbook,)
      .pipe(catchError(this.handleError));
  }

  getAllDamagedBooks() {
    return this.httpclient.get<DamagedBook[]>(`${this.baseUrl}/get/all`)
      .pipe(catchError(this.handleError));
  }

  deleteDamagedBook(id: number): Observable<{}> {
    return this.httpclient.delete(`${this.baseUrl}/remove/${id}`)
      .pipe(catchError(this.handleError));
  }
  getDamagedBookById(id: number) {
    return this.httpclient.get<DamagedBook>(`${this.baseUrl}/get/${id}`)
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
