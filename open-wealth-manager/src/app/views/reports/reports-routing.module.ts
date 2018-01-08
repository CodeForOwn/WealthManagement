import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationGridComponent } from './recommendation/recommendation-grid.component';
import { PortfolioGridComponent } from './portfolio/portfolio-grid.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports'
    },
    children: [
      {
        path: 'recommendations/gridview',
        component: RecommendationGridComponent,
        data: {
          title: 'Recommendations'
        }
      },
      {
        path: 'portfolio/equity',
        component: PortfolioGridComponent,
        data: {
          title: 'Portfolio'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
