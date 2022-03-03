import {NgModule} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

export const materialModules = [
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule
];

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModules {
}
