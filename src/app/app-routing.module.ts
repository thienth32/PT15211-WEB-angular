import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: "book-detail/:bookId",
    component: BookDetailComponent
  },
  {
    path: 'heroes',
    component: HeroListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
