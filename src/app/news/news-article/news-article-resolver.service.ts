import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { ArticlesService }  from '../../articles/articles.service';

@Injectable()
export class NewsArticleResolver implements Resolve<any> {
  constructor(private articlesService: ArticlesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const title = route.paramMap.get('title');

    return this.articlesService.getArticles()
      .pipe(
        map(articles => {
          const foundArticles = articles.articles.filter((article: any) => {
            return article.title.toLowerCase() === title.split('-').join(' ');
          });
          if (foundArticles.length) {
            return foundArticles[0];
          }
          this.router.navigate(['/news']);
          return null;
        }),
      );
  }
}