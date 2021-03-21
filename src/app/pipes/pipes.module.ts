import { NgModule } from '@angular/core';

import { SafeHtmlPipe } from './safehtml.pipe';

@NgModule({
  imports: [],
  declarations: [
    SafeHtmlPipe
  ],
  exports: [
    SafeHtmlPipe
  ]
})
export class PipesModule { }
