import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import{ Testdata } from './testdata'
import { HttpClientModule } from '@angular/common/http';
import { AllFormComponent } from './all-form/all-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFComponent } from './template-driven-f/template-driven-f.component';
import { ModelDrivenFComponent } from './model-driven-f/model-driven-f.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    AllFormComponent,
    TemplateDrivenFComponent,
    ModelDrivenFComponent,
    ReactiveFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(Testdata),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
