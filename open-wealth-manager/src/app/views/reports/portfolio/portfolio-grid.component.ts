import { Component } from '@angular/core';

import { Stock } from '../../../modal/stock';
import * as recommendedStocks from '../../../data/stocks-recommendations.json';
import * as myStocks from '../../../data/my-investment.json';
import { MarketPlaceService } from '../../../services/marketplace.service';
import { ApiService } from '../../../services/api.service';
import { StockDataService } from '../../../services/stockdata.service';
import { Constants } from '../../../core/constants';
import { DataConveter } from '../../../core/dataconveter';


@Component({
  selector: 'portfolio-grid',
  templateUrl: './portfolio-grid.component.html',
})
export class PortfolioGridComponent {
  userInvestmentList: Stock[] = new Array<Stock>();

  constructor(private apiService: ApiService, private mpService: MarketPlaceService, private dataService: StockDataService) {
    this.getMyInvestmentList();
  }

  getMyInvestmentList() {

    this.apiService.get(Constants.datasource + Constants.api_investments).subscribe(myStocksData => {
      myStocksData.map(mydata => {
        var stocksData = this.dataService.getStock(mydata.script);
        if (stocksData != null) {
          this.setUserInvestment(stocksData, mydata);
        } else {
          this.apiService.get(Constants.datasource + Constants.api_recommendations + Constants.script_query + mydata.script).subscribe(dataArray => {
            dataArray.map(data => {
              const cmp = 0;
              this.mpService.getCMPForScripts(data.script, data.ex).subscribe(value => {
                const stock: Stock = DataConveter.createRecommendationStockObject(data, value);
                this.dataService.addStock(stock.script, stock);
                var stocksData = this.dataService.getStock(mydata.script);
                this.setUserInvestment(stocksData, mydata);
              });
            })
          });
        }
      });
    });
  }

  setUserInvestment(stocksData: any, mydata: any) {
    if (stocksData.script === mydata.script) {
      let stock: Stock = DataConveter.createInvestmentStockObject(stocksData, mydata);
      this.userInvestmentList.push(stock);
    } else {
      console.log('Invalid Scripts : ' + stocksData.script + ' != ' + mydata.script);
    }
  }
}
