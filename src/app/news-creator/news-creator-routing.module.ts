import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsCreatorComponent } from './news-creator.component';

const routes: Routes = [
  {path: '', component: NewsCreatorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsCreatorRoutingModule { }
