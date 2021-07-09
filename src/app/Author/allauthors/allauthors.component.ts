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
    console.log(this.searchQuery);
    if (this.searchQuery === '')
      this.getAuthorsAll();
    else if (!isNaN(Number(this.searchQuery)))
      this.getAuthorById(Number(this.searchQuery))
    else if (this.searchQuery[0] === '+') {
      // search sw
      this.searchStartsWith(this.searchQuery.substring(1))
    }
    else if (this.searchQuery[this.searchQuery.length - 1] === '+') {
      // search ew
      this.searchEndsWith(this.searchQuery.substring(0, this.searchQuery.length - 1))
    }
    else {
      // search normal
      this.searchContain(this.searchQuery)
    }
  }

  private getAuthorsAll() {
    this.authorService.getAuthorsAll().subscribe(
      data => {
        this.authors = data;
      }
    );
  }
  private searchStartsWith(query: string) {
    this.authorService.searchNamesw(query).subscribe(
      data => {
        this.authors = data;
        console.log(data);
      }
    );
  }
  private searchEndsWith(query: string) {
    this.authorService.searchNameew(query).subscribe(
      data => {
        this.authors = data;
        console.log(data);
      }
    );
  }
  private searchContain(query: string) {
    this.authorService.searchNameLike(this.searchQuery).subscribe(
      data => {
        this.authors = data;
        console.log(this.authors);
      }
    );
  }
  private getAuthorById(id: number) {
    this.authorService.getAuthorById(id).subscribe(
      data => {
        this.authors = [data];
      }
    );
  }
}
