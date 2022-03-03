import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'app-form-select',
  styleUrls: ['form-select.component.scss'],
  template: `
    <!-- Material select -->
    <div [formGroup]="group">
      <mat-form-field>
        <mat-label>{{ config.label }}</mat-label>
        <mat-select [formControlName]="config.name">
          <mat-option *ngFor="let option of config.options" [value]="option">{{ option }}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>

    <!-- Pure select -->
    <!--<div [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </div>-->
  `
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
