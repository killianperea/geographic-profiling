import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InformationComponent } from './information.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { GridModule } from '@components/grid-component/grid.module';

@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    GridModule
  ],
  exports: [
    InformationComponent
  ]
})
export class InformationModule { }
