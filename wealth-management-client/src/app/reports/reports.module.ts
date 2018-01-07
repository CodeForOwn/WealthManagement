import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { MarketPlaceService } from '../services/marketplace.service';
import { ApiService } from '../services/api.service';
import { RecommendationGridComponent } from './recommendations/recommendation-grid.component';
import { PortfolioGridComponent } from './portfolio/portfolio-grid.component';

@NgModule({
  declarations: [
    RecommendationGridComponent,
    PortfolioGridComponent
  ],
  imports: [
    DataTableModule,
    TooltipModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule
  ],
  exports: [
    RecommendationGridComponent,
    PortfolioGridComponent
  ],
  providers: [MarketPlaceService, ApiService]
})
export class ReportsModule { }
