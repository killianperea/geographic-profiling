import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridComponent } from './grid.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
