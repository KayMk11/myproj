import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/users.model';
const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl = 'http://localhost:8080/auth/';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public name: string;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    console.log(this.currentUserSubject.value)
    return this.currentUserSubject.value;
  }

  signup(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl + 'signup', user);
  }

  login(username: string, password: string) {
    this.name = username;
    return this.http.post<any>(this.baseUrl + 'login',
      new User(null, username, password, '', '', null, '', null, []), { headers })
      .pipe(catchError(this.handleError),
        (map(auth => {
          if (auth && auth.token) {
            // console.log(user)
            sessionStorage.setItem('username', auth.username)
            sessionStorage.setItem('token', "Bearer " + auth.token);
            sessionStorage.setItem('roles', JSON.stringify(auth.roles));
            this.currentUserSubject.next(auth);
          }
          return auth;
        })));
  }
  isLoggedIn(): boolean {
    return sessionStorage.getItem('roles') !== null;
  }

  logout() {
    sessionStorage.clear();
  }

  private handleError(httpError: HttpErrorResponse) {
    let message: string = '';

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
