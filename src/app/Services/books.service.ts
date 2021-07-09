import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseURL = 'http://localhost:8080/book'
  constructor() { }
}
