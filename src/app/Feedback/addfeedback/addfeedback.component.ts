import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit {
  feedbackForm:FormGroup;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      // feedbackDate: new FormControl((new Date()).toISOString().substring(0, 10))
    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.feedbackForm.invalid) {
      return;
    }
    alert('Feedback Added successfully');
    // this.feedbackForm.reset();
  }
}
