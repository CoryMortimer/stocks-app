import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class ArticlesService {
  private articlesUrl = 'api/articles';

  constructor(private _httpClient: HttpClient) { }

  getArticles(): Observable<{articles: Object[]}> {
    return this._httpClient.get<{articles: Object[]}>(this.articlesUrl)
      .pipe(
        catchError(() => of({} as {articles: Object[]}))
      );
  }
}
