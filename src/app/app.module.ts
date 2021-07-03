import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DisplayallBooksComponent } from './Books/displayall-books/displayall-books.component';
import { BooksearchComponent } from './Books/booksearch/booksearch.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminMenuComponent } from './Admin/admin-menu/admin-menu.component';
import { AddPublisherComponent } from './Publisher/add-publisher/add-publisher.component';
import { DisplayAllComponent } from './Publisher/displayAll-publishers/display-all.component';
import { AddDamagedbookComponent } from './DamagedBook/add-damagedbook/add-damagedbook.component';
import { DisplayallDamagedbooksComponent } from './DamagedBook/displayall-damagedbooks/displayall-damagedbooks.component';
import { SuggestbookComponent } from './SuggestBook/suggestbook/suggestbook.component';
import { AllsuggestedbooksComponent } from './SuggestBook/allsuggestedbooks/allsuggestedbooks.component';
import { BookorderComponent } from './Books/bookorder/bookorder.component';
import { AddbookComponent } from './Books/addbook/addbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    SignUpComponent,
    DisplayallBooksComponent,
    BooksearchComponent,
    AdminHomeComponent,
    AdminMenuComponent,
    AddPublisherComponent,
    DisplayAllComponent,
    AddDamagedbookComponent,
    DisplayallDamagedbooksComponent,
    SuggestbookComponent,
    AllsuggestedbooksComponent,
    BookorderComponent,
    AddbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
