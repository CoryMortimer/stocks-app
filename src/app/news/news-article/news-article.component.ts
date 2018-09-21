import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { appear } from '../../animations';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss'],
  animations: appear
})
export class NewsArticleComponent implements OnInit {
  article;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data) => {
        this.article = data.article;
      });
  }

}
