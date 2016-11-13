import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Articles} from './articles';
import {ReadrService} from './app.service';

@Component({
  selector: 'article-list',
  template: `
    <ul>
      <li *ngFor="let article of articles"><a href="{{ article.url }}">{{ article.title }}</a></li>
    </ul>
  `
})

export class ArticleList implements OnInit {
  constructor(private readrService: ReadrService){}

  private articles: Articles[]

  getArticles(){
    this.readrService.getHackerArticles()
                     .subscribe(
                       Articles => {
                         this.articles = Articles.articles;
                       }
                     );
  }

  ngOnInit(){
    this.getArticles();
  }
}
