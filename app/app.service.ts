import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Config} from './app.constants';
import {Article} from './article';

@Injectable()
export class ReadrService {
  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _config: Config) {
    this.actionUrl = _config.HackerNewsUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errorMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

  getHackerArticles(): Observable<Article[]> {
    return this._http.get(this.actionUrl).map(this.extractData).catch(this.handleError);
  }
}
