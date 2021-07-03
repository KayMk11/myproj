import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestbook',
  templateUrl: './suggestbook.component.html',
  styleUrls: ['./suggestbook.component.css']
})
export class SuggestbookComponent implements OnInit {
  suggestbook:FormGroup;
  submitted = false;
  constructor() { }

  ngOnInit(): void {
    this.suggestbook = new FormGroup({
      title: new FormControl(null,[Validators.required]),
      subject: new FormControl(null,[Validators.required]),
      author: new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.suggestbook.invalid) {
      return;
    }
    alert('Book suggested successfully');

    this.suggestbook.reset();
  }
}
