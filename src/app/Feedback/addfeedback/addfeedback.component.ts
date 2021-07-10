import { FeedbackService } from './../../Services/feedback.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit {
  feedbackForm:FormGroup;
  submitted=false;
  feedback:Feedback = new Feedback(0,new Date(),'','','', new User(0,'','','','',null,'',null,[]));
  // feedback:Feedback = new Feedback(0,new Date(),'','','',new User);
  isAdded=false;
  constructor(private feedbackservice:FeedbackService) {

   }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }
  onSubmit(){
    this.submitted = true;
    this.feedback.title = this.feedbackForm.value.title
    this.feedback.description = this.feedbackForm.value.description
    this.write()
    this.feedbackForm.reset()
  }

  write(){
   this.feedbackservice.writefeedback(this.feedback).subscribe(feedback=>{
     console.log(this.feedback)
     this.isAdded = true;
   })
  }

}
