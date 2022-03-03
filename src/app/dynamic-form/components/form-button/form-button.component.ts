import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'app-form-button',
  styleUrls: ['form-button.component.scss'],
  template: `
    <!-- Material button -->
    <button mat-raised-button [disabled]="group.invalid" color="primary">{{ config.label }}</button>

    <!-- Pure button -->
    <!--<div [formGroup]="group">
      <button
        type="submit"
        [disabled]="config.disabled">
        {{ config.label }}
      </button>
    </div>-->
  `
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
