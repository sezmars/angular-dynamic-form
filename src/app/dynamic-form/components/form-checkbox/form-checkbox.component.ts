import {FormGroup} from '@angular/forms';
import {Component} from '@angular/core';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'app-checkbox',
  styleUrls: ['form-checkbox.component.scss'],
  template: `
    <!-- Material checkbox -->
    <div [formGroup]="group">
      <div [formGroupName]="config.name">
        <div *ngFor="let opt of config.options">
          <mat-checkbox [formControlName]="opt.key">{{opt.label}}</mat-checkbox>
        </div>
      </div>
    </div>

    <!-- Material checkbox -->
    <!--<div [formGroup]="group">
      <div [formGroupName]="config.name" >
        <div *ngFor="let opt of config.options">
        <label class="form-check-label">
          <input [formControlName]="opt.key" type="checkbox"/>
          {{opt.label}}</label>
        </div>
      </div>
    </div>-->
  `
})
export class FormCheckboxComponent implements Field {
  group: FormGroup;
  config: FieldConfig;

  get isValid(): boolean {
    return this.group.controls[this.config.name].valid;
  }

  get isDirty(): boolean {
    return this.group.controls[this.config.name].dirty;
  }
}
