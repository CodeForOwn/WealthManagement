import { Component, OnInit, ViewChild } from '@angular/core';

import { Stock } from '../../../modal/stock';
import * as recommendedStocks from '../../../data/stocks-recommendations.json';
import * as myStocks from '../../../data/my-investment.json';
import { MarketPlaceService } from '../../../services/marketplace.service';
import { ApiService } from '../../../services/api.service';
import { StockDataService } from '../../../services/stockdata.service';
import { ChartBars } from '../../../modal/chartbars';
import { StockChart } from '../../../modal/stockchart';
import { UIChart } from 'primeng/primeng';
import { Dropdown } from 'primeng/primeng';
import { DataConveter } from '../../../core/dataconveter';
import { Constants } from '../../../core/constants';

interface SuggestionList {
  name: string;
  code: string;
}

@Component({
  selector: 'app-portfolio-chart',
  templateUrl: './portfolio-chart.component.html',
})
export class PortfolioChartComponent implements OnInit {

  @ViewChild('barChart')
  barChart;

  userInvestmentList: Stock[] = new Array<Stock>();
  data: any;
  labels: String[] = new Array<String>();
  targetData: number[] = new Array<number>();
  achiveData: number[] = new Array<number>();
  myData: number[] = new Array<number>();
  stockSuggestorsList: SuggestionList[];
  selectedSuggestion: SuggestionList;

  constructor(private apiService: ApiService, private mpService: MarketPlaceService, private dataService: StockDataService) {
    this.stockSuggestorsList = [
      { name: 'WB-Stock Axis', code: 'WB-SA' },
      { name: 'PP-Stock Axis', code: 'PP-SA' },
      { name: 'MP-Stock Axis', code: 'MP-SA' },
      { name: 'Hemanth', code: 'Hemanth' },
      { name: 'Wealth', code: 'Wealth' }
    ];
  }

  ngOnInit() {
    this.update(this.barChart);
    setTimeout(() => {
      this.barChart.refresh();
    }, 400)
  }

  update(chart: UIChart) {
    if (null !== this.selectedSuggestion && typeof this.selectedSuggestion !== 'undefined') {
      this.getMyInvestmentList(this.selectedSuggestion.code);
    } else {
      this.getMyInvestmentList('WB-SA');
    }
    
    this.labels = new Array<String>();
    this.targetData = new Array<number>();
    this.achiveData = new Array<number>();
    this.myData = new Array<number>();

    let chartData: StockChart = null;
    chartData = new StockChart();
    chartData.labels = this.labels;
    chartData.datasets = new Array<ChartBars>();

    const mayBar: ChartBars = new ChartBars();
    mayBar.label = 'My';
    mayBar.backgroundColor = '#63c2de';
    mayBar.borderColor = '#63c2de';
    mayBar.data = this.myData;
    chartData.datasets.push(mayBar);

    const achivedBar: ChartBars = new ChartBars();
    achivedBar.label = 'Achived';
    achivedBar.backgroundColor = '#f8cb00';
    achivedBar.borderColor = '#f8cb00';
    achivedBar.data = this.achiveData;
    chartData.datasets.push(achivedBar);

    const targetBar: ChartBars = new ChartBars();
    targetBar.label = 'Target';
    targetBar.backgroundColor = '#4dbd74';
    targetBar.borderColor = '#4dbd74';
    targetBar.data = this.targetData;
    chartData.datasets.push(targetBar);

    this.data = chartData;

    setTimeout(() => {
      chart.refresh();
    }, 200)
  }

  getMyInvestmentList(suggesterCode: String) {

    this.apiService.get(Constants.datasource + Constants.api_investments).subscribe(myStocksData => {
      myStocksData.map(mydata => {
        var stocksData = this.dataService.getStock(mydata.script);
        if (stocksData != null) {
          this.setUserInvestment(stocksData, mydata, suggesterCode);
        } else {
          this.apiService.get(Constants.datasource + Constants.api_recommendations + Constants.script_query + mydata.script).subscribe(dataArray => {
            dataArray.map(data => {
              const cmp = 0;
              this.mpService.getCMPForScripts(data.script, data.ex).subscribe(value => {
                const stock: Stock = DataConveter.createRecommendationStockObject(data, value);
                this.dataService.addStock(stock.script, stock);
                var stocksData = this.dataService.getStock(mydata.script);
                this.setUserInvestment(stocksData, mydata, suggesterCode);
              });
            })
          });
        }
      });
    });
  }

  setUserInvestment(stocksData: any, mydata: any, suggesterCode: String) {
    if (stocksData.script === mydata.script) {
      let stock: Stock = DataConveter.createInvestmentStockObject(stocksData, mydata);
      this.userInvestmentList.push(stock);
      if (stocksData.rcomBy === suggesterCode) {
        this.labels.push(stocksData.script);
        this.targetData.push(Math.round(stocksData.targetPercentage));
        this.achiveData.push(Math.round(stocksData.achivedPercentage));
        this.myData.push(Math.round(stocksData.myPercentage));
      }
    } else {
      console.log('Invalid Scripts : ' + stocksData.script + ' != ' + mydata.script);
    }
  }

}
