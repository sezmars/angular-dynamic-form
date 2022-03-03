import {FormGroup} from '@angular/forms';

import {FieldConfig} from './field-config.interface';

export interface Field {
  group: FormGroup;
  config: FieldConfig;
}

export enum EnumFieldTypeConfig {
  file = 'file',
  radio = 'radio',
  input = 'input',
  select = 'select',
  button = 'button',
  content = 'content',
  textarea = 'textarea',
  checkbox = 'checkbox',
}
