import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @Input() maxArticles?: number;
  articles$: Observable<Object>;

  constructor(private _articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  private getArticles(): void {
    this.articles$ = this._articlesService.getArticles()
      .pipe(
        map(articles => articles.articles.slice(0, this.maxArticles))
      );
  }
}
