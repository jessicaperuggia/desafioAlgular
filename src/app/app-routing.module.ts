import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenewsComponent } from './components/createnews/createnews.component';
import { NewscardComponent } from './components/newscard/newscard.component';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails.component';

const routes: Routes = [
  {
    path: "",
    component: NewscardComponent
  },
  {
    path: "news/details/:id",
    component: NewsdetailsComponent
  },
  {
    path: "news/create",
    component: CreatenewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
