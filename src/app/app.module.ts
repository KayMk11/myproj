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
import { AddPublisherComponent } from './Publisher/add-publisher/add-publisher.component';
import { DisplayAllComponent } from './Publisher/displayAll-publishers/display-all.component';
import { AddDamagedbookComponent } from './DamagedBook/add-damagedbook/add-damagedbook.component';
import { DisplayallDamagedbooksComponent } from './DamagedBook/displayall-damagedbooks/displayall-damagedbooks.component';
import { SuggestbookComponent } from './SuggestBook/suggestbook/suggestbook.component';
import { AllsuggestedbooksComponent } from './SuggestBook/allsuggestedbooks/allsuggestedbooks.component';
import { AddbookComponent } from './Books/addbook/addbook.component';
import { AllfeedbacksComponent } from './Feedback/allfeedbacks/allfeedbacks.component';
import { AddorderComponent } from './Orderbooks/addorder/addorder.component';
import { AllordersComponent } from './Orderbooks/allorders/allorders.component';
import { AddauthorComponent } from './Author/addauthor/addauthor.component';
import { AllauthorsComponent } from './Author/allauthors/allauthors.component';
import { UserHomeComponent } from './User/user-home/user-home.component';
import { BookissueComponent } from './User/bookissue/bookissue.component';
import { AddfeedbackComponent } from './Feedback/addfeedback/addfeedback.component';
import { ViewprofileComponent } from './User/viewprofile/viewprofile.component';
import { UpdatepasswordComponent } from './User/updatepassword/updatepassword.component';
import { ViewfeedbacksComponent } from './User/viewfeedbacks/viewfeedbacks.component';
import { BooksborrowedComponent } from './User/booksborrowed/booksborrowed.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './Services/authInterceptor.service';



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
    AddPublisherComponent,
    DisplayAllComponent,
    AddDamagedbookComponent,
    DisplayallDamagedbooksComponent,
    SuggestbookComponent,
    AllsuggestedbooksComponent,
    AddbookComponent,
    AllfeedbacksComponent,
    AddorderComponent,
    AllordersComponent,
    AddauthorComponent,
    AllauthorsComponent,
    UserHomeComponent,
    BookissueComponent,
    AddfeedbackComponent,
    ViewprofileComponent,
    UpdatepasswordComponent,
    ViewfeedbacksComponent,
    BooksborrowedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
