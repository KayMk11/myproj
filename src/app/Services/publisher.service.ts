import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publisher } from '../models/publisher.model';
const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  private baseUrl = 'http://localhost:8080/publisher';
  constructor(private httpclient: HttpClient) { }

  addPublisher(publ: Publisher): Observable<Publisher> {
    console.log(publ)
    return this.httpclient.post<Publisher>(`${this.baseUrl}/add`, publ, { headers })
  }

  getAllPublishers(): Observable<Publisher[]> {
    return this.httpclient.get<Publisher[]>(`${this.baseUrl}/all`)
      .pipe(catchError(this.handleError));
  }

  deletePublisher(publisherId: number): Observable<{}> {
    return this.httpclient.delete(`${this.baseUrl}/delete/${publisherId}`)
      .pipe(catchError(this.handleError));
  }

  updatePublisher(publisher: Publisher) {
    console.log(publisher);
    return this.httpclient.put(`${this.baseUrl}/update`, publisher, { headers })
      .pipe(catchError(this.handleError));
  }

  getPublisherById(publisherId: number) {
    return this.httpclient.get<Publisher>(`${this.baseUrl}/${publisherId}`, { headers })
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