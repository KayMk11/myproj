import { FeedbackService } from './../../Services/feedback.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-allfeedbacks',
  templateUrl: './allfeedbacks.component.html',
  styleUrls: ['./allfeedbacks.component.css']
})
export class AllfeedbacksComponent implements OnInit {
  feedbacks: Feedback[] = [];
  searchFeedback: FormGroup;
  allFeedbacks = false;
  isSearched = false;
  feedback: Feedback;

  constructor(private feedbackservice: FeedbackService) {
    // this.feedbackservice.viewFeedbackList().subscribe(data=>{
    //   console.log(data);
    //   this.feedbacks = data;
    // })
  }

  ngOnInit(): void {
    this.viewFeedbackList();
    this.searchFeedback = new FormGroup({
      searchText: new FormControl()
    })
  }
  onSubmit() {

  }
  onClickClose(feedbackid: number) {
    this.feedbackservice.closeFeedback(feedbackid).subscribe(cl => {
      this.feedbackservice.viewFeedbackList().subscribe(data => {
        this.feedbacks = data
      })
    })
  }

  onSearch() {
    console.log(this.searchFeedback.value.searchText);
    if (this.searchFeedback.value.searchText === '') {
      this.viewFeedbackList();
    } else {
      this.feedbackservice.getfeedbackbyId(this.searchFeedback.value.searchText).subscribe(
        data => {
          this.allFeedbacks = true;
          this.isSearched = true;
          this.feedbacks = [data];
        }, error => { })
    }

  }
  private viewFeedbackList() {
    this.feedbackservice.viewfeedbackbyUser().subscribe(feed => {
      console.log(feed);
      // console.log(feed[0].user);
      this.feedbacks = feed;
    })
  }
}

