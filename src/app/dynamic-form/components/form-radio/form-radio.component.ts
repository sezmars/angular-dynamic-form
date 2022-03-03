import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'app-form-radio',
  styleUrls: ['./form-radio.component.scss'],
  template: `
    <!-- Material radio -->
    <div [formGroup]="group">
      <mat-radio-group [formControlName]="config.name">
        <div *ngFor="let opt of config.options">
          <mat-radio-button [value]="opt.key">{{opt.label}}</mat-radio-button>
        </div>
      </mat-radio-group>
    </div>

    <!-- Pure radio -->
    <!--<form [formGroup]="group">
      <div *ngFor="let opt of config.options">
        <label class="form-check-label">
          <input id="{{opt.key}}" [formControlName]="config.name" name="{{config.name}}" [value]="opt.key" type="radio"/>
          {{opt.label}}</label>
      </div>
    </form>-->
  `,
})
export class FormRadioComponent implements Field {
  group: FormGroup;
  config: FieldConfig;

  get isValid(): boolean {
    return this.group.controls[this.config.name].valid;
  }

  get isDirty(): boolean {
    return this.group.controls[this.config.name].dirty;
  }
}
