import { User } from './users.model';

export class Feedback {
  feedbackId: number;
  feedbackDate: Date;
  title: string;
  description: string;
  status: string;
  user: User;
  // constructor(){}
  constructor(feedbackid: number, feedbackDate: Date,
    title: string,
    description: string,
    status: string,
    user: User) {
    this.feedbackId = feedbackid
    this.feedbackDate = feedbackDate
    this.title = title
    this.description = description
    this.status = status
    this.user = user
  }
}
