import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewscardComponent } from './components/newscard/newscard.component';

import { MatCardModule} from '@angular/material/card';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list/'

@NgModule({
  declarations: [
    AppComponent,
    NewscardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
