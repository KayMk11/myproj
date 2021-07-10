import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';

const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseUrl = 'http://localhost:8080/feedback';
  constructor(private httpclient:HttpClient) { }
  // User
  writefeedback(feedback:Feedback): Observable<Feedback>{
    console.log(feedback);
    return this.httpclient.post<Feedback>(`${this.baseUrl}/write`, feedback, {headers})
  }

  // Admin
  viewFeedbackList(){
    return this.httpclient.get<Feedback[]>(`${this.baseUrl}/all`)
    .pipe(catchError(this.handleError));
  }

  closeFeedback(feedbackid:number):Observable<{}>{
    return this.httpclient.get(`${this.baseUrl}/close/${feedbackid}`)
    .pipe(catchError(this.handleError));
  }

  viewfeedbackbyUser(){
    return this.httpclient.get<Feedback[]>(`${this.baseUrl}/view`)
    .pipe(catchError(this.handleError));
  }

  getfeedbackbyId(feedbackid:number){
    return this.httpclient.get<Feedback>(`${this.baseUrl}/ById/${feedbackid}`)
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
