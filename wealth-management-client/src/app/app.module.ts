import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReportsModule } from './reports/reports.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
