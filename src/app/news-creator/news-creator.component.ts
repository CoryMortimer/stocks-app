import { Component, OnInit, OnDestroy } from '@angular/core';

import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'app-news-creator',
  templateUrl: './news-creator.component.html',
  styleUrls: ['./news-creator.component.scss']
})
export class NewsCreatorComponent implements OnInit, OnDestroy {
  activeStep: 'metaData' | 'content' | 'preview' = 'metaData';
  metaDataElements = [{
    name: 'Title',
    type: 'input',
    required: true,
    flex: 50
  }, {
    name: 'Author',
    type: 'input',
    required: true,
    flex: 50
  }];
  contentOptions = {
    autosave: true
  };
  submitted = false;
  stepsMode = 'horizontal';

  private didInitiateComponent = false;
  private mediaServiceSubscription;

  constructor(private tdMediaService: TdMediaService) { }

  ngOnInit() {
    this.mediaServiceSubscription = this.tdMediaService.registerQuery('gt-sm')
      .subscribe(isGreaterThanSmall => {
        this.stepsMode = isGreaterThanSmall ? 'horizontal' : 'vertical';
      });
  }

  toStep(step: 'metaData' | 'content' | 'preview') {
    this.activeStep = step;
  }

  getStateFromForm(form) {
    if (!this.didInitiateComponent) {
      this.didInitiateComponent = true;
      return 'required';
    }
    return !form.valid ? 'required' : 'complete';
  }

  getStateFromEditor(editor) {
    return editor && editor.simpleMDE && editor.simpleMDE.value() ? 'complete' : 'required';
  }

  submitArticle() {
    this.submitted = true;
  }

  ngOnDestroy() {
    this.mediaServiceSubscription.unsubscribe();
  }
}
