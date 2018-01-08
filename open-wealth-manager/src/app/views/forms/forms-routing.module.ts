import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationFormComponent } from './recommendation/recommendation-form.component';
import { PortfolioItemFormComponent } from './portfolio-item/portfolio-item-form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms'
    },
    children: [
      {
        path: 'recommendation',
        component: RecommendationFormComponent,
        data: {
          title: 'Recommendation'
        }
      },
      {
        path: 'portfolio-item',
        component: PortfolioItemFormComponent,
        data: {
          title: 'Portfolio Item'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
