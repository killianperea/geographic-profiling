import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    AgmCoreModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
