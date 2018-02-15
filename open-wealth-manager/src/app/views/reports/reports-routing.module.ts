import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationGridComponent } from './recommendation/recommendation-grid.component';
import { PortfolioGridComponent } from './portfolio/portfolio-grid.component';
import { PortfolioChartComponent } from './portfolio/portfolio-chart.component';

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
      },
      {
        path: 'portfolio/charts',
        component: PortfolioChartComponent,
        data: {
          title: 'Portfolio Charts'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
