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
import { CreatenewsComponent } from './components/createnews/createnews.component';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails.component';

import { HomeComponent } from './views/home/home.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NewscardComponent,
    CategorylistComponent,
    SearchbarComponent,
    CreatenewsComponent,
    NewsdetailsComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
