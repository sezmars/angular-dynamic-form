import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModules} from '../index-material';
import {TemplateRefModule} from './templates/template-ref.module';

import {FormFileComponent} from './components/form-file/form-file.component';
import {FormInputComponent} from './components/form-input/form-input.component';
import {FormRadioComponent} from './components/form-radio/form-radio.component';
import {FormSelectComponent} from './components/form-select/form-select.component';
import {FormButtonComponent} from './components/form-button/form-button.component';
import {DynamicFormComponent} from './containers/dynamic-form/dynamic-form.component';
import {DynamicFieldDirective} from './components/dynamic-field/dynamic-field.directive';
import {FormCheckboxComponent} from './components/form-checkbox/form-checkbox.component';
import {FormTextareaComponent} from './components/form-textarea/form-textarea.component';

@NgModule({
    imports: [
      CommonModule,
      MaterialModules,
      TemplateRefModule,
      ReactiveFormsModule,
    ],
    declarations: [
      FormFileComponent,
      FormInputComponent,
      FormRadioComponent,
      FormSelectComponent,
      FormButtonComponent,
      DynamicFormComponent,
      DynamicFieldDirective,
      FormCheckboxComponent,
      FormTextareaComponent,
    ],
    exports: [
      TemplateRefModule,
      DynamicFormComponent,
    ]
})
export class DynamicFormModule {
}
