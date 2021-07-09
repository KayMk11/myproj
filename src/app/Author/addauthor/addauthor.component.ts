import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  author: Author = new Author();
  submitted = false;
  addauthorForm: FormGroup;
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.addauthorForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email]),
      contactno: new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.addauthorForm.invalid) {
      return;
    }
    this.author.firstName = this.addauthorForm.value.firstName;
    this.author.lastName = this.addauthorForm.value.lastName;
    this.author.email = this.addauthorForm.value.email;
    this.author.contactno = this.addauthorForm.value.contactno;

    this.authorService.addAuthor(this.author).subscribe(
      author => {
        console.log(author);
      }, error => {
        console.log(error);
      });
    this.addauthorForm.reset();
  }


}
