import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { ArticlesComponent } from './articles.component';
import { ArticlesService } from './articles.service';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    CommonModule,
    CovalentMarkdownModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [ArticlesComponent, ArticleComponent],
  providers: [ArticlesService],
  exports: [ArticlesComponent, ArticleComponent]
})
export class ArticlesModule { }
