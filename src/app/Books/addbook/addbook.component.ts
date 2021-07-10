import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Books } from '../books.model';
import { AuthorService } from 'src/app/Services/author.service';
import { PublisherService } from 'src/app/Services/publisher.service';
import { BooksService } from 'src/app/Services/books.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  addbookForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authorService: AuthorService, private publisherService: PublisherService, private bookService: BooksService) {
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
    let book: Books = new Books(null, '', '', [], null, null, '', null, '', null);
    book.title = this.addbookForm.value.Title;
    book.subject = this.addbookForm.value.subject;
    book.publishedYear = this.addbookForm.value.publishedYear;
    // console.log(this.addbookForm.getRawValue().publisherId)
    this.publisherService.getPublisherById(this.addbookForm.value.publisherId).subscribe(
      data => {
        book.publisher = data
      }
    );
    book.isbn = this.addbookForm.value.isbn;
    book.quantity = this.addbookForm.value.quantity;
    book.shelfDetails = this.addbookForm.value.shelfDetails;
    book.bookCost = this.addbookForm.value.bookCost;
    for (let id of this.addbookForm.value.authorIdList) {
      this.authorService.getAuthorById(id).subscribe(
        data => {
          book.authors.push(data)
        }
      );
    }
    console.log(book)
    // console.log("")
    console.log(JSON.stringify(book))
    // this.bookService.addBook(this.book);
    // this.addbookForm.reset();
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
