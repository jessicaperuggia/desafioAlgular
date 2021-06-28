import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewscardComponent } from './components/newscard/newscard.component';

import { MatIconModule } from '@angular/material/icon'

import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchresultComponent } from './components/searchbar/searchresult/searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    NewscardComponent,
    CategorylistComponent,
    SearchbarComponent,
    SearchresultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    MatIconModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
