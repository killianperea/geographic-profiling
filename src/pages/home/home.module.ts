import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';

import { MapModule } from '@components/map-component/map.module';
import { InformationModule } from '@components/information-component/information.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    MapModule,
    InformationModule
  ]
})
export class HomeModule { }
