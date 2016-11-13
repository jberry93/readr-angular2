import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Articles} from './articles';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReadrService{
  constructor(private http: Http){}

  private ApiKey = 'apiKey=<insert API key here!>';
  private ApiUrl = 'https://newsapi.org/v1/articles?';
  private HackerNewsUrl = this.ApiUrl + 'source=hacker-news&' + this.ApiKey;

  getHackerArticles(): Observable<Articles[]> {
    return this.http.get(this.HackerNewsUrl)
                    .map((response: Response) => response.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
