import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ReadrService} from './app.service';
import {ArticleList} from './article-list.component';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, ArticleList],
  providers: [ReadrService],
  bootstrap: [AppComponent]
})

export class AppModule{}
