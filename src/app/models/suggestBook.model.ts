import { User } from "./users.model";

export class SuggestBook{
  id:number;
  title:string;
  subject:string;
  author:string;
  description:string;
  suggestionDate:Date;
  user:User;

  constructor(id:number,title:string,subject:string,author:string,
    description:string,suggestionDate:Date,user:User){
      this.id = id;
      this.title=title;
      this.subject= subject;
      this.author = author;
      this.description = description;
      this.suggestionDate = suggestionDate
      this.user = user
    }
}
