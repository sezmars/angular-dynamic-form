import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';

import {MaterialModules} from './index-material';
import {MatCardModule} from '@angular/material/card';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    FormsModule,
    MatCardModule,
    BrowserModule,
    MaterialModules,
    HttpClientModule,
    DynamicFormModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  exports: [HelloComponent]
})
export class AppModule {
}
