import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentStepsModule } from '@covalent/core/steps'
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { PortalModule } from '@angular/cdk/portal'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NewsCreatorRoutingModule } from './news-creator-routing.module';
import { NewsCreatorComponent } from './news-creator.component';
import { ArticlesModule } from '../articles/articles.module';

@NgModule({
  imports: [
    CommonModule,
    CovalentDynamicFormsModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentStepsModule,
    CovalentTextEditorModule,
    PortalModule,
    MatButtonModule,
    MatIconModule,
    ArticlesModule,
    NewsCreatorRoutingModule
  ],
  declarations: [NewsCreatorComponent]
})
export class NewsCreatorModule { }
