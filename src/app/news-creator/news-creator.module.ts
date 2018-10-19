import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentStepsModule } from '@covalent/core/steps'
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { PortalModule } from '@angular/cdk/portal'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

import { NewsCreatorRoutingModule } from './news-creator-routing.module';
import { NewsCreatorComponent } from './news-creator.component';
import { ArticlesModule } from '../articles/articles.module';

@NgModule({
  imports: [
    CommonModule,
    CovalentDialogsModule,
    CovalentDynamicFormsModule,
    CovalentLayoutModule,
    CovalentLoadingModule,
    CovalentMediaModule,
    CovalentStepsModule,
    CovalentTextEditorModule,
    PortalModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatStepperModule,
    ArticlesModule,
    NewsCreatorRoutingModule
  ],
  declarations: [NewsCreatorComponent]
})
export class NewsCreatorModule { }
