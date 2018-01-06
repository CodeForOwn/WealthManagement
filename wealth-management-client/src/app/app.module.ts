import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/primeng';
import { ReportsModule } from './reports/reports.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSideMenuBarComponent } from './app-sidemenubar/app-sidemenubar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSideMenuBarComponent
  ],
  imports: [
    BrowserModule,
    ReportsModule,
    TabViewModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
