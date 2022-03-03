import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'app-form-textarea',
  styleUrls: ['form-textarea.component.scss'],
  template: `
    <!-- Material textarea -->
    <div [formGroup]="group">
      <mat-form-field>
        <mat-label>{{ config.label }}</mat-label>
        <textarea matInput
                  cdkTextareaAutosize
                  cdkAutosizeMinRows="1"
                  cdkAutosizeMaxRows="5"
                  #autosize="cdkTextareaAutosize"
                  [formControlName]="config.name"></textarea>
      </mat-form-field>
    </div>

    <!-- Pure textarea -->
    <!--<div [formGroup]="group">
      <label>{{ config.label }}</label>
      <textarea
        type="text"
        [required]="config.required"
        [formControlName]="config.name"
        [attr.placeholder]="config.placeholder"></textarea>
    </div>-->
  `
})
export class FormTextareaComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
