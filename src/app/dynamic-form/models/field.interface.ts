import {FormGroup} from '@angular/forms';

import {FieldConfig} from './field-config.interface';

export interface Field {
  config: FieldConfig;
  group: FormGroup;
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
