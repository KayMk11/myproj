import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Users } from '../models/users.model';
const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl = 'http://localhost:8080/auth/';
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;
  public name:string;

  constructor(private http: HttpClient,  private router: Router){
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): Users {
    return this.currentUserSubject.value;
  }

  signup(user: Users): Observable<any>{
    return this.http.post<Users>(this.baseUrl + 'signup', user);
  }

  login(username: string, password: string) {
    this.name = username;
    return this.http.post<any>(this.baseUrl + 'login',
        new Users(null,username,password,'','',null,'',null,[]), {headers})
        .pipe(catchError(this.handleError),
            (map(user => {
              if (user && user.token) {
                  sessionStorage.setItem('token',"Bearer "+user.token);
                  sessionStorage.setItem('roles',JSON.stringify(user.roles));
                  this.currentUserSubject.next(user);
              }
              return user;
      })));
  }
  isLoggedIn(): boolean{
    return sessionStorage.getItem('username') !== null;
  }
  logout(){
    sessionStorage.clear();
  }

  private handleError(httpError: HttpErrorResponse) {
    let message:string = '';

  if (httpError.error instanceof ProgressEvent) {
    message = "Error";
  }

  else {
    message = httpError.error.message;
    console.error(
      `Backend returned code ${httpError.status}, ` +
      `body was: ${httpError.error}`);
  }
    return throwError(message);
  }

}