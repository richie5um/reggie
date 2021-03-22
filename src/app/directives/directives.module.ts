import { NgModule } from '@angular/core';

import { ContentEditableDirective } from './contenteditable.directive';
import { CheckedDirective } from './checked.directive';

@NgModule({
  imports: [],
  declarations: [
    ContentEditableDirective,
    CheckedDirective,
  ],
  exports: [
    ContentEditableDirective,
    CheckedDirective,

  ]
})
export class DirectivesModule { }
