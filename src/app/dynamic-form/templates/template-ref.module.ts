import {NgModule} from '@angular/core';

import {TemplateRefPipe} from './template-ref.pipe';
import {TemplateRefDirective} from './template-ref.directive';

@NgModule({
  declarations: [
    TemplateRefPipe,
    TemplateRefDirective,
  ],
  exports: [
    TemplateRefPipe,
    TemplateRefDirective,
  ]
})
export class TemplateRefModule {
}
