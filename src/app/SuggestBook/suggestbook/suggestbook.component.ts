import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SuggestbookService } from 'src/app/Services/suggestbook.service';
import { SuggestBook } from 'src/app/models/suggestBook.model';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-suggestbook',
  templateUrl: './suggestbook.component.html',
  styleUrls: ['./suggestbook.component.css']
})
export class SuggestbookComponent implements OnInit {
  suggestbook: FormGroup;
  submitted = false;
  suggestbooks: SuggestBook = new SuggestBook(0, '', '', '', '', null, new User(0, '', '', '', '', null, '', null, []));
  constructor(private suggestservice: SuggestbookService) { }

  ngOnInit(): void {
    this.suggestbook = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    })
  }
  onSubmit() {
    this.submitted = true;
    this.suggestbooks.title = this.suggestbook.value.title
    this.suggestbooks.subject = this.suggestbook.value.subject
    this.suggestbooks.author = this.suggestbook.value.author
    this.suggestbooks.description = this.suggestbook.value.description
    this.save();
    this.suggestbook.reset();
  }
  save() {
    this.suggestservice.suggestBook(this.suggestbooks).subscribe(feedback => {
      console.log(this.suggestbooks)
    })
  }
}
