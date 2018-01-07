import { Component } from '@angular/core';
import { Stock } from '../../modal/stock';
import * as recommendedStocks from '../../data/stocks-recommendations.json';

import { MarketPlaceService } from '../../services/marketplace.service';

@Component({
  selector: 'recommendations-grid',
  templateUrl: './recommendation-grid.component.html',
})
export class RecommendationGridComponent {
  stockRecommendationList: Stock[] = new Array<Stock>();
  scripts: string[] = new Array<string>();

  constructor(private mpservice: MarketPlaceService) {
    this.getStockRecomList();
  }

  getStockRecomList() {
    let stocksData = JSON.parse(JSON.stringify(recommendedStocks));
    stocksData.map(data => {
      let cmp = 0;
      this.mpservice.getCMPForScripts(data.script, data.ex).subscribe(value => {
        let stock: Stock = new Stock();
        stock.setMarketPrice(value.quoteSummary.result[0].price.regularMarketPrice.raw);
        stock.setName(value.quoteSummary.result[0].price.longName);
        stock.setRecomendationData(data);
        this.stockRecommendationList.push(stock);
      });
    });
  }

}
