import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuggestBook } from '../models/suggestBook.model';
const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class SuggestbookService {
  private baseUrl = 'http://localhost:8080/book';

  constructor(private httpclient:HttpClient) { }

  suggestBook(suggest:SuggestBook): Observable<SuggestBook>{
    console.log(suggest)
    return this.httpclient.post<SuggestBook>(`${this.baseUrl}/suggest`, suggest,{headers})
    .pipe(catchError(this.handleError));
  }

  getAllSuggestion(){
    return this.httpclient.get<SuggestBook[]>(`${this.baseUrl}/suggestions/all`)
    .pipe(catchError(this.handleError));
  }

  removeSuggestion(id:number):Observable<{}>{
    return this.httpclient.delete(`${this.baseUrl}/suggestions/remove/${id}`)
    .pipe(catchError(this.handleError));
  }

  getSuggestionByid(id:number){
    return this.httpclient.get<SuggestBook>(`${this.baseUrl}/suggestions/get/${id}`)
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
