import {FormControl} from '@angular/forms';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h4>Hello, {{name}}!</h4>
  <mat-form-field *ngIf="customFormControl">
    <mat-label>Outside control</mat-label>
    <input
      matInput
      type="text"
      [formControl]="customFormControl">
  </mat-form-field>
  `,
  styles: [`:host {
    margin: 10px;
    padding: 10px;
    display: block;
    border: 1px dashed black;
  }`]
})
export class HelloComponent {
  @Input() name: string;
  @Input() customFormControl: FormControl = new FormControl();
}
