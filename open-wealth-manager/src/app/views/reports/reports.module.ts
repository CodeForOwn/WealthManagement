import { NgModule } from '@angular/core';
import { ReportsRoutingModule } from './reports-routing.module';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/primeng';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';

import { ReportsComponent } from './reports.component';
import { RecommendationGridComponent } from './recommendation/recommendation-grid.component';
import { PortfolioGridComponent } from './portfolio/portfolio-grid.component';

import { MarketPlaceService } from '../../services/marketplace.service';
import { ApiService } from '../../services/api.service';

@NgModule({
  imports: [
    ReportsRoutingModule,
    DataTableModule,

    TooltipModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule
  ],
  declarations: [
    ReportsComponent,
    RecommendationGridComponent,
    PortfolioGridComponent
  ],
  providers: [ApiService, MarketPlaceService]
})
export class ReportsModule { }
