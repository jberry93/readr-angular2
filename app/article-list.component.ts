import {Component, OnInit} from '@angular/core';
import {Articles} from './articles';
import 'rxjs/add/operator/toPromise';
import {ReadrService} from './app.service';

@Component({
  moduleId: module.id,
  selector: 'article-list',
  templateUrl: 'article-list.component.html',
  styleUrls: ['article-list.component.css']
})

export class ArticleList implements OnInit {
  articles: Articles[];

  constructor(private readrService: ReadrService){}

  getArticles(): void {
    this.readrService.getHackerArticles()
                     .then(articles => this.articles = articles);
  }

  ngOnInit(): void {
    this.getArticles();
  }
}
