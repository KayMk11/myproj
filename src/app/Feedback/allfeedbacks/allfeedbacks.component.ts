import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-allfeedbacks',
  templateUrl: './allfeedbacks.component.html',
  styleUrls: ['./allfeedbacks.component.css']
})
export class AllfeedbacksComponent implements OnInit {
  feedbacks:Feedback[];
  searchFeedback:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }
}
