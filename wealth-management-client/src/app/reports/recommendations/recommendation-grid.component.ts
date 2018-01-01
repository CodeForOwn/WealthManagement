import { Component } from '@angular/core';
import { Stock } from '../../modal/stock';
import * as stocks from '../../data/stocks-recommendations.json';

@Component({
  selector: 'recommendations-grid',
  templateUrl: './recommendation-grid.component.html',
  styleUrls: ['./recommendation-grid.component.css']
})
export class RecommendationGridComponent {
  stockRecommendationList: Stock[] = new Array<Stock>();

  constructor() {
    this.getStockRecomList();
  }

  getStockRecomList() {
    let stocksData = JSON.parse(JSON.stringify(stocks));
    stocksData.map(data => {
      this.stockRecommendationList.push(this.parseData(data));
    })
  }

  parseData(data: any) : Stock {
    let stock: Stock = new Stock();
    stock.setData(data);
    return stock;
  }

}
