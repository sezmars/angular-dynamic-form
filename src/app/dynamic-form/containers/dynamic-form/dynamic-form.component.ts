import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

import {Observable} from 'rxjs';

import {FieldConfig} from '../../models/field-config.interface';
import {EnumFieldTypeConfig} from '../../models/field.interface';

@Component({
  exportAs: 'dynamicForm',
  selector: 'app-dynamic-form',
  styleUrls: ['dynamic-form.component.scss'],
  template: `
    <!-- Material form content -->
    <mat-card>
      <mat-card-content>
        <form class="dynamic-form" [formGroup]="form" (submit)="handleSubmit($event)">
          <p>Please fill in for check</p>
          <ng-container *ngFor="let field of config" appDynamicField [config]="field" [group]="form">
            <ng-container *ngIf="field?.type === enumFieldTypeConfig.content">
              <ng-container [ngTemplateOutlet]="field.name | templateRef"></ng-container>
            </ng-container>
          </ng-container>
        </form>
      </mat-card-content>
    </mat-card>

    <!-- Pure form content -->
    <!--<form class="dynamic-form" [formGroup]="form" (submit)="handleSubmit($event)">
      <ng-container *ngFor="let field of config" appDynamicField [config]="field" [group]="form">
        <ng-container *ngIf="field?.type === enumFieldTypeConfig.content">
          <ng-container [ngTemplateOutlet]="field.name | templateRef"></ng-container>
        </ng-container>
      </ng-container>
    </form>-->
  `,
})
export class DynamicFormComponent implements OnChanges, OnInit {
  @Input()
  config: FieldConfig[] = [];

  @Output()
  submitValue: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  enumFieldTypeConfig: typeof EnumFieldTypeConfig = EnumFieldTypeConfig;

  constructor(private fb: FormBuilder) {
  }

  get controls(): Array<FieldConfig> {
    return this.config.filter(({type}) => type !== EnumFieldTypeConfig.button);
  }

  get changes(): Observable<any> {
    return this.form.valueChanges;
  }

  get valid(): boolean {
    return this.form.valid;
  }

  get value(): any {
    return this.form.value;
  }

  ngOnInit(): void {
    this.form = this.createGroup();
  }

  ngOnChanges(): void {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.name);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });
    }
  }

  createGroup(): FormGroup {
    const group = this.fb.group({});
    this.controls.forEach((control) => {
        if (control.type === EnumFieldTypeConfig.checkbox) {
          const fieldsCtrls = {};
          const opts = {};
          for (const opt of control?.options) {
            opts[opt.key] = new FormControl(opt.value);
          }
          fieldsCtrls[control.name] = new FormGroup(opts);
          group.addControl(control.name, fieldsCtrls[control.name]);
        } else {
          group.addControl(control.name, this.createControl(control));
        }
      }
    );
    return group;
  }

  createControl(config: FieldConfig): FormControl {
    const {disabled, validation, value} = config;
    return this.fb.control({disabled, value}, validation);
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.submitValue.emit(this.value);
  }

  setDisabled(name: string, disable: boolean): void {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any): void {
    this.form.controls[name].setValue(value, {emitEvent: true});
  }
}
