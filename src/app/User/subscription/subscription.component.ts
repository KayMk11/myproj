import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  status: string;
  startDate: Date;
  endDate: Date;
  user: User = new User(null, '', '', '', '', null, '', null, [])
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserDetails()
    // console.log(this.isSubscriptionActive())
  }
  getUserDetails() {
    this.userService.getUserDetails(this.user).subscribe(
      data => {
        this.user = data
        this.status = this.user.subscriptionStatus
        this.startDate = this.user.subscriptionStartDate
        this.endDate = this.user.subscriptionExpireDate
        // console.log(this.status)
      }, error => {
        console.log(error);
      }
    )
  }
  isSubscriptionActive() {
    // console.log(this.status)
    if (this.status === 'ACTIVE')
      return true
    return false
  }
  onClickCancel() {
    this.userService.stopSubscription().subscribe()
  }
  onClickStart() {
    this.userService.startSubscription().subscribe()
  }
}
