import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {ReadrService} from './app.service';
import {ArticleList} from './article-list/article-list.component';

@NgModule({
  imports: [BrowserModule, HttpModule, MaterialModule.forRoot()],
  declarations: [AppComponent, ArticleList],
  providers: [ReadrService],
  bootstrap: [AppComponent]
})

export class AppModule{}
