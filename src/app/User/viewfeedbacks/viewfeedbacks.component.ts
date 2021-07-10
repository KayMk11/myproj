
import { FeedbackService } from './../../Services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-viewfeedbacks',
  templateUrl: './viewfeedbacks.component.html',
  styleUrls: ['./viewfeedbacks.component.css']
})
export class ViewfeedbacksComponent implements OnInit {
  viewfeedbacks:Feedback[];

  constructor(private feedbackservice:FeedbackService) {
    this.feedbackservice.viewfeedbackbyUser().subscribe(data=>{
      this.viewfeedbacks = data
    })
  }

  ngOnInit(): void {
  }

 
}
