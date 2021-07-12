import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookWrapper } from '../Books/addbook/book-wrapper.model';
import { Books } from '../Books/books.model';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseURL = 'http://localhost:8080/book'
  constructor(private httpclient: HttpClient) { }

  getAllBooks(): Observable<Books[]> {
    return this.httpclient.get<Books[]>(`${this.baseURL}/search/all`)
      .pipe(catchError(this.handleError))
  }
  getBooksNameLike(query: string): Observable<Books[]> {
    return this.httpclient.get<Books[]>(`${this.baseURL}/search/title/contains/${query}`)
      .pipe(catchError(this.handleError))
  }
  getBooksNameStartsWith(query: string): Observable<Books[]> {
    return this.httpclient.get<Books[]>(`${this.baseURL}/search/title/startswith/${query}`)
      .pipe(catchError(this.handleError))
  }
  getBooksNameEndsWith(query: string): Observable<Books[]> {
    return this.httpclient.get<Books[]>(`${this.baseURL}/search/title/endswith/${query}`)
      .pipe(catchError(this.handleError))
  }
  getBooksBySubject(query: string): Observable<Books[]> {
    return this.httpclient.get<Books[]>(`${this.baseURL}/search/subject/${query}`)
      .pipe(catchError(this.handleError))
  }
  getBooksById(id: number): Observable<Books> {
    return this.httpclient.get<Books>(`${this.baseURL}/get/${id}`).pipe(catchError(this.handleError))
  }
  addBook(book: BookWrapper) {
    console.log(book)
    this.httpclient.post<Books>(`${this.baseURL}/add`, book, { headers }).subscribe(
      res => {
        console.log(res)
      }
    )
  }
  deleteBook(bookId: number) {
    return this.httpclient.delete(`${this.baseURL}/delete/${bookId}`)
      .pipe(catchError(this.handleError))
  }
  updateBook(book: BookWrapper) {
    return this.httpclient.put(`${this.baseURL}/update`, book).subscribe(
      res => {
        console.log(res)
      }
    )
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
