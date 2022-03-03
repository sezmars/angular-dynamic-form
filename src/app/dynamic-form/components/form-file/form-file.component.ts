import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'app-file',
  styleUrls: ['form-file.component.scss'],
  template: `
    <div [formGroup]="group">
      <!-- Material input file -->
      <button type="button" mat-raised-button (click)="fileInput.click()">Choose File</button>
      <input hidden type='file' id="imageUpload" accept=".png, .jpg, .jpeg" #fileInput (change)="uploadFile($event)">

      <!-- Pure inpute file -->
      <!--<input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" #fileInput (change)="uploadFile($event)"/>-->
    </div>
  `,
})
export class FormFileComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  get isValid(): boolean {
    return this.group.controls[this.config.name].valid;
  }

  get isDirty(): boolean {
    return this.group.controls[this.config.name].dirty;
  }

  uploadFile(event): void {
    const reader = new FileReader();
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.group.get(this.config.name).patchValue({
          file: reader.result
        });
      };
    }
  }
}
