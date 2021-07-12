import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DamagedBook } from 'src/app/models/damagedBook.model';
import { DamagedBooksService } from 'src/app/Services/damaged-books.service';

@Component({
  selector: 'app-displayall-damagedbooks',
  templateUrl: './displayall-damagedbooks.component.html',
  styleUrls: ['./displayall-damagedbooks.component.css']
})
export class DisplayallDamagedbooksComponent implements OnInit {
  searchDamaged:FormGroup;
  DamagedBooks:DamagedBook[];
  damagedbook:DamagedBook;
  deleteMsg=false;
  allDamagedBooks=false;
  isSearched=false;
  constructor(private damagedbookSservice:DamagedBooksService) {
    this.damagedbookSservice.getAllDamagedBooks().subscribe(db=>{
      console.log(db[0]);
      this.DamagedBooks = db;
    })
  }

  ngOnInit(): void {
    this.getAllDamagedBooks();
    this.searchDamaged = new FormGroup({
      searchText: new FormControl()
    })
  }
  onClickDelete(id:number){
    this.damagedbookSservice.deleteDamagedBook(id)
    .subscribe(data=>{
      this.deleteMsg = true
      this.damagedbookSservice.getAllDamagedBooks().subscribe(data=>{
        this.DamagedBooks = data;
      })
    },error=>{
      this.deleteMsg = error 
    });
  }

  onSearch() {
    console.log(this.searchDamaged.value.searchText);
    if (this.searchDamaged.value.searchText === '')
      this.getAllDamagedBooks();
    else {
      this.damagedbookSservice.getDamagedBookById(this.searchDamaged.value.searchText).subscribe(
        data => {
          this.allDamagedBooks= true;
          this.isSearched = true;
          this.DamagedBooks = [data];
        }, error => { })
    }
  }

  private getAllDamagedBooks() {
    this.damagedbookSservice.getAllDamagedBooks().subscribe(data => {
      this.DamagedBooks = data;
    })
  }
}
