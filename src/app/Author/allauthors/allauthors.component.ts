import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author.model';
import { AuthorService } from '../../Services/author.service';

@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
  styleUrls: ['./allauthors.component.css']
})
export class AllauthorsComponent implements OnInit {
  searchAuthor: FormGroup;
  searchQuery: string;
  authors: Author[];

  // search: FormGroup;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAuthorsAll();
    this.searchAuthor = new FormGroup({
      searchText: new FormControl()
    })
  }

  search() {
    this.searchQuery = this.searchAuthor.value.searchText;

    if (this.searchQuery === '')
      this.getAuthorsAll();
    else if (this.searchQuery[0] === '+') {
      // search sw
      this.searchQuery = this.searchQuery.substring(1);
      this.authorService.searchNamesw(this.searchQuery).subscribe(
        data => {
          this.authors = data;
          console.log(data);
        }
      );
    }
    else if (this.searchQuery[this.searchQuery.length - 1] === '+') {
      // search ew
      this.searchQuery = this.searchQuery.substring(0, this.searchQuery.length - 1);
      console.log(this.searchQuery);
      this.authorService.searchNameew(this.searchQuery).subscribe(
        data => {
          this.authors = data;
          console.log(data);
        }
      );
    }
    else {
      // search normal
      this.authorService.searchNameLike(this.searchQuery).subscribe(
        data => {
          this.authors = data;
          console.log(this.authors);
        }
      );
    }
  }

  private getAuthorsAll() {
    this.authorService.getAuthorsAll().subscribe(
      data => {
        this.authors = data;
      }
    );
  }

}
