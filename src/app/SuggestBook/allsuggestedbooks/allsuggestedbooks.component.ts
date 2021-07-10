import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SuggestBook } from 'src/app/models/suggestBook.model';
import { SuggestbookService } from 'src/app/Services/suggestbook.service';

@Component({
  selector: 'app-allsuggestedbooks',
  templateUrl: './allsuggestedbooks.component.html',
  styleUrls: ['./allsuggestedbooks.component.css']
})
export class AllsuggestedbooksComponent implements OnInit {
  searchsuggested:FormGroup;
  suggestions:SuggestBook[];

  deleteMsg:string = '';

  constructor(private suggestservice:SuggestbookService ) {
    this.suggestservice.getAllSuggestion().subscribe(data=>{
      console.log(data);
      this.suggestions = data
    })
  }

  onClickDelete(id:number){
    this.suggestservice.removeSuggestion(id)
    .subscribe(data=>{
      this.deleteMsg = 'Publisher Deleted Successfully!!';
      this.suggestservice.getAllSuggestion().subscribe(data=>{
        this.suggestions = data;
      })
    },error=>{
      this.deleteMsg = error
    });
  }

  ngOnInit(): void {
    this.getAllSuggestion();
    this.searchsuggested = new FormGroup({
      searchText: new FormControl()
    })
  }
  isAdmin(){
    return sessionStorage.getItem('roles') == '["ROLE_ADMIN"]';
  }

  onSearch() {
    console.log(this.searchsuggested.value.searchText);
    if (this.searchsuggested.value.searchText === '')
      this.getAllSuggestion();
    else {
      this.suggestservice.getSuggestionByid(this.searchsuggested.value.searchText).subscribe(
        data => {
          this.suggestions = [data];
        }, error => { })
    }
  }

  private getAllSuggestion() {
    this.suggestservice.getAllSuggestion().subscribe(s => {
      this.suggestions = s;
    })
  }

}
