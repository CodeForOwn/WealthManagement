import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Stock } from '../../../modal/stock';

import * as recommendedStocks from '../../../data/stocks-recommendations.json';

import { MarketPlaceService } from '../../../services/marketplace.service';
import { ApiService } from '../../../services/api.service';
import { StockDataService } from '../../../services/stockdata.service';
import { Constants } from '../../../core/constants';
import { DataConveter } from '../../../core/dataconveter';

@Component({
  selector: 'app-recommendation-grid',
  templateUrl: './recommendation-grid.component.html'
})
export class RecommendationGridComponent implements OnInit {

  suggestorsList: SelectItem[];
  columnOptions: SelectItem[];
  cols: any[];

  stockRecommendationList: Stock[] = new Array<Stock>();
  scripts: string[] = new Array<string>();

  constructor(private apiService: ApiService, private mpservice: MarketPlaceService, private dataService: StockDataService) {
    this.getStockRecomList();
  }

  ngOnInit() {
    this.suggestorsList = [];
    this.suggestorsList.push({ label: 'All Suggestors', value: null });
    this.suggestorsList.push({ label: 'Hemanth', value: 'Hemanth' });
    this.suggestorsList.push({ label: 'StockAxis', value: 'StockAxis' });
    this.suggestorsList.push({ label: 'Wealth', value: 'Wealth' });


    this.cols = [
      { field: 'script', header: 'Script' },
      { field: 'name', header: 'Name' },
      { field: 'marketPrice', header: 'CMP' },
      { field: 'rcomPrice', header: 'Suggested Price' },
      { field: 'targetPrice', header: 'Target Price' }
    ];

    this.columnOptions = [];
    for (let i = 0; i < this.cols.length; i++) {
      this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
    }
  }

  getStockRecomList() {
    this.apiService.get(Constants.datasource + Constants.api_recommendations).subscribe(dataArray => {
      dataArray.map(data => {
        const cmp = 0;
        this.mpservice.getCMPForScripts(data.script, data.ex).subscribe(value => {
          const stock:Stock = DataConveter.createRecommendationStockObject(data, value);
          this.stockRecommendationList.push(stock);
          this.dataService.addStock(stock.script, stock);
        });
      })
    });
  }

}
