import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Articles} from './articles';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReadrService{
  constructor(private http: Http){}

  private ApiKey = 'apiKey=bc525e6cdfa443e4b6b1e0d17790f4a3';
  private ApiUrl = 'https://newsapi.org/v1/articles?';
  private HackerNewsUrl = this.ApiUrl + 'source=hacker-news&' + this.ApiKey;

  getHackerArticles(): Observable<Articles[]> {
    return this.http.get(this.HackerNewsUrl)
                    .map((response: Response) => response.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
