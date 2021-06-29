import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { NewscardComponent } from './components/newscard/newscard.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchresultComponent } from './components/searchbar/searchresult/searchresult.component';
import { CreatenewsComponent } from './components/createnews/createnews/createnews.component';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails/newsdetails.component';

import { HomeComponent } from './views/home/home.component';

import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NewscardComponent,
    CategorylistComponent,
    SearchbarComponent,
    SearchresultComponent,
    CreatenewsComponent,
    NewsdetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
