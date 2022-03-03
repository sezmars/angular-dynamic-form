import {FormControl, Validators} from '@angular/forms';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';

import {FieldConfig} from './dynamic-form/models/field-config.interface';
import {EnumFieldTypeConfig} from './dynamic-form/models/field.interface';
import {TemplateRegistry} from './dynamic-form/templates/template-registry';
import {DynamicFormComponent} from './dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [TemplateRegistry],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  customControlName = 'outside_control';
  config: FieldConfig[] = [
    {
      type: EnumFieldTypeConfig.input,
      label: 'Full name',
      name: 'name',
      required: false,
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      type: EnumFieldTypeConfig.content,
      label: 'Content between first and second input not working',
      name: this.customControlName,
    },
    {
      type: EnumFieldTypeConfig.select,
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: EnumFieldTypeConfig.textarea,
      label: 'About yourself',
      name: 'about',
      placeholder: 'Enter about yourself',
      validation: [Validators.required]
    },
    {
      type: EnumFieldTypeConfig.checkbox,
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        {key: 'fishing', label: 'Fishing'},
        {key: 'cooking', label: 'Cooking'}
      ]
    },
    {
      type: EnumFieldTypeConfig.radio,
      name: 'social',
      label: 'Social',
      options: [
        {key: 'linkedin', label: 'Linkedin'},
        {key: 'facebook', label: 'Facebook'}
      ]
    },
    {
      type: EnumFieldTypeConfig.file,
      name: 'picture',
      label: 'Picture',
      required: true,
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  getFormCustomControl(control: string): FormControl {
    if (control && this.dynamicForm?.form) {
      return this.dynamicForm.form.get(control) as FormControl;
    }
  }

  submit(value: { [name: string]: any }): void {
    console.info(value);
  }
}