import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/primeng';
import { MarketPlaceService } from './recommendations/marketplace.service';
import { ApiService } from './recommendations/api.service';
import { RecommendationGridComponent } from './recommendations/recommendation-grid.component';

@NgModule({
  declarations: [
    RecommendationGridComponent
  ],
  imports: [
    DataTableModule,
    CommonModule,
    HttpModule
  ],
  exports: [
    RecommendationGridComponent
  ],
  providers: [MarketPlaceService, ApiService]
})
export class ReportsModule { }
