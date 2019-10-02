//Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Material Components */
import { MaterialModule } from './material.module';

/* First page */
import { AppComponent } from './app.component';
import { HomeModule } from '@pages/home/home.module';

/* Google Maps */
import { AgmCoreModule } from '@agm/core';
import { mapConfig } from '@config/map-config';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AgmCoreModule.forRoot(mapConfig),

    /* Main page */
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
