import { DamagedBooksService } from './../../Services/damaged-books.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DamagedBooks } from '../DamagedBook.model';
import { Books } from 'src/app/Books/books.model';
// import { DamagedBookWrapper } from '../damaged-book-wrapper.model';

@Component({
  selector: 'app-add-damagedbook',
  templateUrl: './add-damagedbook.component.html',
  styleUrls: ['./add-damagedbook.component.css']
})
export class AddDamagedbookComponent implements OnInit {
  damagedbook: FormGroup;
  submitted = false;
  isAdded = false;
  dbook: DamagedBooks = new DamagedBooks();
  constructor(private damagedservice: DamagedBooksService) { }

  ngOnInit(): void {
    this.damagedbook = new FormGroup({
      bookId: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required])
    })
  }
  onSubmit() {
    this.submitted = true;
    this.dbook.bookId = this.damagedbook.value.bookId
    this.dbook.description = this.damagedbook.value.description
    this.dbook.quantity = this.damagedbook.value.quantity
    this.save();
    this.damagedbook.reset();
  }
  save() {
    this.damagedservice.addDamagedBook(this.dbook).subscribe(dbooks => {
      console.log(dbooks);
      this.isAdded = true;
    },
      error => console.log(error))
  }

}
