import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { ArticlesModule } from '../articles/articles.module';
import { NewsArticleComponent } from './news-article/news-article.component';

@NgModule({
  imports: [
    CommonModule,
    CovalentLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    ArticlesModule,
    NewsRoutingModule
  ],
  declarations: [NewsComponent, NewsArticleComponent]
})
export class NewsModule { }
