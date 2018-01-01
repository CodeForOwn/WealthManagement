import { NgModule } from '@angular/core';
import { DataTableModule } from 'primeng/primeng';

import { RecommendationGridComponent } from './recommendations/recommendation-grid.component';

@NgModule({
  declarations: [
    RecommendationGridComponent
  ],
  imports: [
    DataTableModule
  ],
  exports: [
    RecommendationGridComponent
  ],
  providers: []
})
export class ReportsModule { }
