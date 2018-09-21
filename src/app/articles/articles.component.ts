import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { appear } from '../animations';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: appear
})
export class ArticlesComponent implements OnInit {
  @Input() maxArticles?: number;
  articles$: Observable<Object>;

  constructor(private _articlesService: ArticlesService, private router: Router) { }

  ngOnInit() {
    this.getArticles();
  }

  navigateToArticle(article) {
    const hyphenatedArticleTitle = article.title.toLowerCase().split(' ').join('-');
    this.router.navigate([`/news/${hyphenatedArticleTitle}`]);
  }

  private getArticles(): void {
    this.articles$ = this._articlesService.getArticles()
      .pipe(
        map(articles => articles.articles.slice(0, this.maxArticles))
      );
  }
}
