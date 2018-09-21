import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';

import { TdDialogService } from '@covalent/core/dialogs';
import { TdLoadingService } from '@covalent/core/loading';

import { appear } from '../animations';

@Component({
  selector: 'app-news-creator',
  templateUrl: './news-creator.component.html',
  styleUrls: ['./news-creator.component.scss'],
  animations: appear
})
export class NewsCreatorComponent {
  @ViewChild('metaDataForm') _metaDataForm;
  @ViewChild('textEditor') _textEditor;
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
  cardOverTitle = 'News Story Creator';
  cardOverSubtitle = 'Create a news story to add to the dashboard.';
  stepsMode = 'horizontal';
  formState = 'none';
  contentState = 'none';

  constructor(
    private _tdDialogService: TdDialogService,
    private _tdLoadingService: TdLoadingService,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  toStep(step: 'metaData' | 'content' | 'preview') {
    this.activeStep = step;
  }

  getStateFromForm(form) {
    return !form.valid ? 'required' : 'complete';
  }

  getStateFromEditor(editor) {
    return editor && editor.simpleMDE && editor.simpleMDE.value() ? 'complete' : 'required';
  }

  clearEditor() {
    this._textEditor.value = '';
    this._changeDetectorRef.detectChanges();
  }

  clearForm() {
    this._metaDataForm.form.reset();
  }

  clearAll() {
    this.clearForm();
    this.clearEditor();
    this.activeStep = 'metaData';
  }

  submitArticle() {
    if (!this._metaDataForm || !this._metaDataForm.valid ||
      !this._textEditor || !this._textEditor.simpleMDE || !this._textEditor.simpleMDE.value()) {
      this._tdDialogService.openAlert({
        message: 'Please complete form before submitting.'
      });
      return;
    }
    this._tdDialogService.openConfirm({
      title: 'Confirm submission',
      message: 'You may not edit your article after submission. Are you sure you want to submit?',
      cancelButton: 'No',
      acceptButton: 'Yes'
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this._tdLoadingService.register('loadingOverlay');
        setTimeout(() => {
          this._tdLoadingService.resolve('loadingOverlay');
    this.submitted = true;
          this.cardOverTitle = "Thank you for submitting your article";
          this.cardOverSubtitle = '';
        }, 2000);
      }
    });
  }
}
