import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsArticleResolver } from './news-article/news-article-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: ':title',
    component: NewsArticleComponent,
    resolve: {
      article: NewsArticleResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [NewsArticleResolver]
})
export class NewsRoutingModule { }
