import {ValidatorFn} from '@angular/forms';

import {EnumFieldTypeConfig} from './field.interface';

type TypeFieldTypeConfig = keyof typeof EnumFieldTypeConfig;

export interface FieldConfig {
  name: string;
  options?: any;
  label?: string;
  value?: unknown;
  disabled?: boolean;
  onUpload?: () => {};
  placeholder?: string;
  type: TypeFieldTypeConfig;
  validation?: ValidatorFn[];
}
