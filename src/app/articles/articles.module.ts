import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { ArticlesComponent } from './articles.component';
import { ArticlesService } from './articles.service';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [ArticlesComponent],
  providers: [ArticlesService],
  exports: [ArticlesComponent]
})
export class ArticlesModule { }
