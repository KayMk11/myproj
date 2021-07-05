import { AllordersComponent } from './Orderbooks/allorders/allorders.component';
import { AddorderComponent } from './Orderbooks/addorder/addorder.component';
import { AllfeedbacksComponent } from './Feedback/allfeedbacks/allfeedbacks.component';
import { AddPublisherComponent } from './Publisher/add-publisher/add-publisher.component';
import { AllsuggestedbooksComponent } from './SuggestBook/allsuggestedbooks/allsuggestedbooks.component';
import { SuggestbookComponent } from './SuggestBook/suggestbook/suggestbook.component';
import { DisplayallDamagedbooksComponent } from './DamagedBook/displayall-damagedbooks/displayall-damagedbooks.component';
import { AddDamagedbookComponent } from './DamagedBook/add-damagedbook/add-damagedbook.component';
import { AdminMenuComponent } from './Admin/admin-menu/admin-menu.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { BooksearchComponent } from './Books/booksearch/booksearch.component';
import { DisplayallBooksComponent } from './Books/displayall-books/displayall-books.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayAllComponent } from './Publisher/displayAll-publishers/display-all.component';
import { AddbookComponent } from './Books/addbook/addbook.component';
import { AddauthorComponent } from './Author/addauthor/addauthor.component';
import { AllauthorsComponent } from './Author/allauthors/allauthors.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'signup', component: SignUpComponent},
  {path:'login', component: LoginComponent},
  {path:'adminhome', component: AdminHomeComponent},
  {path:'adminmenu', component:AdminMenuComponent},
  {path:'addbook', component:AddbookComponent},
  {path:'displayallbooks', component: DisplayallBooksComponent},
  {path:'booksearch', component: BooksearchComponent},
  {path:'displayallpublishers', component: DisplayAllComponent},
  {path:'addpublisher', component: AddPublisherComponent},
  {path:'addDamagedBook', component: AddDamagedbookComponent},
  {path:'displayalldamagedbooks', component: DisplayallDamagedbooksComponent},
  {path:'suggestbook', component: SuggestbookComponent},
  {path:'displayallsuggestedbooks', component:AllsuggestedbooksComponent},
  {path:'feedbacks', component:AllfeedbacksComponent},
  {path:'orderbooks', component:AddorderComponent},
  {path:'orderlist', component:AllordersComponent},
  {path:'addauthor', component:AddauthorComponent},
  {path:'allauthor', component:AllauthorsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
