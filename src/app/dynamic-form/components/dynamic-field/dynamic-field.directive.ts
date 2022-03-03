import {FormGroup} from '@angular/forms';
import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef} from '@angular/core';

import {FieldConfig} from '../../models/field-config.interface';
import {EnumFieldTypeConfig, Field} from '../../models/field.interface';

import {FormFileComponent} from '../form-file/form-file.component';
import {FormInputComponent} from '../form-input/form-input.component';
import {FormRadioComponent} from '../form-radio/form-radio.component';
import {FormSelectComponent} from '../form-select/form-select.component';
import {FormButtonComponent} from '../form-button/form-button.component';
import {FormTextareaComponent} from '../form-textarea/form-textarea.component';
import {FormCheckboxComponent} from '../form-checkbox/form-checkbox.component';

const components: { [type: string]: Type<Field> } = {
  file: FormFileComponent,
  radio: FormRadioComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  button: FormButtonComponent,
  textarea: FormTextareaComponent,
  checkbox: FormCheckboxComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnChanges(): void {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit(): void {
    const isContent = this.config.type === EnumFieldTypeConfig.content;

    if (!components[this.config.type] && !isContent) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`,
      );
    }

    if (!isContent) {
      const component = this.resolver?.resolveComponentFactory<Field>(components[this.config.type]);
      this.component = this.container.createComponent(component);
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }
}
