import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
import { ApiService } from './api.service';
import { ChartJSService } from './chartjs.service';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule,
    HttpModule
  ],
  providers: [ApiService, ChartJSService],
  declarations: [ ChartJSComponent ]
})
export class ChartJSModule { }
