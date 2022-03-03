import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MaterialModules} from './index-material';

import {MatCardModule} from '@angular/material/card';
import {BrowserModule} from '@angular/platform-browser';

import {DynamicFormModule} from './dynamic-form/dynamic-form.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as control 'outside_control'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.customControlName).toEqual('outside_control');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card p').textContent).toContain('Please fill in for check');
  });
});
