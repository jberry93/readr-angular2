import {Injectable} from '@angular/core';

@Injectable()
export class Config{
  public Server: string = "http://localhost:3000/";
  public ApiKey: string = "apiKey=bc525e6cdfa443e4b6b1e0d17790f4a3";
  public ApiUrl: string = "https://newsapi.org/v1/articles?";
  public HackerNewsUrl: string = this.ApiUrl + "source=hacker-news&" + this.ApiKey;
}
