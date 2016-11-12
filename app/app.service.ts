import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Articles} from './articles';

@Injectable()
export class ReadrService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private ApiKey = 'apiKey=bc525e6cdfa443e4b6b1e0d17790f4a3';
  private ApiUrl = 'https://newsapi.org/v1/articles?';
  private HackerNewsUrl = this.ApiUrl + 'source=hacker-news&' + this.ApiKey;

  constructor(private http: Http){}

  private handleError(error: any): Promise<any> {
    console.error('Uh Oh!', error);
    return Promise.reject(error.message || error);
  }

  getHackerArticles(): Promise<Articles[]> {
    return this.http.get(this.HackerNewsUrl)
                    .toPromise()
                    .then(response => response.json().data as Articles[])
                    .catch(this.handleError);
  }
}
