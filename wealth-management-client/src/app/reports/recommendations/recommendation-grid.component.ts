import { Component } from '@angular/core';
import { Stock } from '../../modal/stock';
import * as stocks from '../../data/stocks-recommendations.json';

import { MarketPlaceService } from '../../services/marketplace.service';

@Component({
  selector: 'recommendations-grid',
  templateUrl: './recommendation-grid.component.html',
  styleUrls: ['./recommendation-grid.component.css']
})
export class RecommendationGridComponent {
  stockRecommendationList: Stock[] = new Array<Stock>();
  scripts: string[] = new Array<string>();

  constructor(private mpservice: MarketPlaceService) {
    this.getStockRecomList();
  }

  getStockRecomList() {
    let stocksData = JSON.parse(JSON.stringify(stocks));
    stocksData.map(data => {
      let cmp = 0;
      this.mpservice.getCMPForScripts(data.script).subscribe(value => {
        let stock: Stock = new Stock();
        stock.marketPrice = value.quoteSummary.result[0].price.regularMarketPrice.raw;
        console.log('regularMarketPrice is ', stock.marketPrice);
        stock.setData(data);
        console.log('achivedPercentage: ', stock.achivedPercentage)
        console.log('achivedPercentageClass: ', stock.achivedPercentageClass)
        this.stockRecommendationList.push(stock);
      });
    });
  }

  parseData(data: any, cmp): Stock {
    let stock: Stock = new Stock();
    stock.setData(data);
    stock.marketPrice = cmp;
    return stock;
  }

}
