import { UserAddress } from 'src/app/models/useraddress.model';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { User } from './../models/users.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/user';
  constructor(private httpclient:HttpClient) { }

  getUserDetails(user:User){
    return this.httpclient.get<User>(`${this.baseUrl}/view`,{headers})
    .pipe(catchError(this.handleError));
  }
  addAddress(useraddr:UserAddress): Observable<UserAddress>{
    console.log(useraddr)
    return this.httpclient.post<UserAddress>(`${this.baseUrl}/address/add`, useraddr,{headers})
  }
  updateUserDetails(user:User): Observable<any>{
    return this.httpclient.put<any>(`${this.baseUrl}/update`, user);
  }
  updateAddress(useraddr:UserAddress):Observable<any>{
    return this.httpclient.put<any>(`${this.baseUrl}/address/update`, useraddr)
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
