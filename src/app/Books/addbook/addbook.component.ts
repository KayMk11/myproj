import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Books } from '../books.model';
import { AuthorService } from 'src/app/Services/author.service';
import { PublisherService } from 'src/app/Services/publisher.service';
import { BooksService } from 'src/app/Services/books.service';
import { BookWrapper } from './book-wrapper.model';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  addbookForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.addbookForm = this.fb.group({
      Title: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      publishedYear: ['', [Validators.required]],
      publisherId: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      shelfDetails: ['', [Validators.required]],
      bookCost: ['', [Validators.required]],
      authorIdList: this.fb.array([this.createElement()])
    })
  }
  onSubmit() {
    let book: BookWrapper = new BookWrapper(null, '', '', [], null, null, '', null, '', null);
    book.title = this.addbookForm.value.Title;
    book.subject = this.addbookForm.value.subject;
    book.publishedYear = this.addbookForm.value.publishedYear;
    book.publisherId = this.addbookForm.value.publisherId;
    book.isbn = this.addbookForm.value.isbn;
    book.quantity = this.addbookForm.value.quantity;
    book.shelfDetails = this.addbookForm.value.shelfDetails;
    book.bookCost = this.addbookForm.value.bookCost;
    book.authorIdList = this.addbookForm.value.authorIdList
    console.log(book)
    console.log(JSON.stringify(book))
    this.bookService.addBook(book);
    this.addbookForm.reset();
    this.submitted = true;
  }
  createElement() {
    return this.fb.control('', Validators.required);
  }
  addAuthor() {
    this.authorIdList.push(this.createElement());
  }
  get authorIdList() {
    return this.addbookForm.get('authorIdList') as FormArray;
  }
  deleteControl(i: number) {
    if (this.authorIdList.length !== 1) {
      this.authorIdList.removeAt(i);
    }
  }
}
