import { Component } from '@angular/core';

import { Stock } from '../../../modal/stock';
import * as recommendedStocks from '../../../data/stocks-recommendations.json';
import * as myStocks from '../../../data/my-investment.json';
import { MarketPlaceService } from '../../../services/marketplace.service';

@Component({
  selector: 'portfolio-grid',
  templateUrl: './portfolio-grid.component.html',
})
export class PortfolioGridComponent {
  userInvestmentList: Stock[] = new Array<Stock>();
  scripts: string[] = new Array<string>();

  constructor(private mpservice: MarketPlaceService) {
    this.getMyInvestmentList();
  }

  getMyInvestmentList() {
    const myStocksData = JSON.parse(JSON.stringify(myStocks));
    myStocksData.map(mydata => {
      const stocksData = JSON.parse(JSON.stringify(recommendedStocks));
      stocksData.map(data => {
        if (data.script === mydata.script) {
          this.mpservice.getCMPForScripts(data.script, data.ex).subscribe(value => {
            let stock: Stock = new Stock();
            stock.setMarketPrice(value.quoteSummary.result[0].price.regularMarketPrice.raw);
            stock.setName(value.quoteSummary.result[0].price.longName);
            stock.setTodayGain(value.quoteSummary.result[0].price.regularMarketChangePercent.raw);
            stock.setRecomendationData(data);
            stock.setProfolioData(mydata);
            this.userInvestmentList.push(stock);
          });
        }
      });
    });
  }


}
