import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { MarketPlaceService } from '../services/marketplace.service';
import { ApiService } from '../services/api.service';
import { RecommendationGridComponent } from './recommendations/recommendation-grid.component';
import { UserviewGridComponent } from './userviews/userview-grid.component';

@NgModule({
  declarations: [
    RecommendationGridComponent,
    UserviewGridComponent
  ],
  imports: [
    DataTableModule,
    TooltipModule,
    CommonModule,
    HttpModule
  ],
  exports: [
    RecommendationGridComponent,
    UserviewGridComponent
  ],
  providers: [MarketPlaceService, ApiService]
})
export class ReportsModule { }
