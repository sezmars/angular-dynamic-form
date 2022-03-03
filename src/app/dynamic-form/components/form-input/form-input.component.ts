import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'app-form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
    <!-- Material input -->
    <div [formGroup]="group">
      <mat-form-field>
        <mat-label>{{ config.label }}</mat-label>
        <input
          matInput
          type="text"
          [formControlName]="config.name"
          [attr.placeholder]="config.placeholder">
      </mat-form-field>
    </div>

    <!-- Pure input -->
    <!--<div [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="text"
        [formControlName]="config.name"
        [attr.placeholder]="config.placeholder">
    </div>-->
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
