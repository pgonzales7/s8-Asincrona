import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatosModule } from './datos/datos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DatosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
