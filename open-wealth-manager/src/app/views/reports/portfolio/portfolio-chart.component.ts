import { Component, OnInit } from '@angular/core';

import { Stock } from '../../../modal/stock';
import * as recommendedStocks from '../../../data/stocks-recommendations.json';
import * as myStocks from '../../../data/my-investment.json';
import { MarketPlaceService } from '../../../services/marketplace.service';
import { ChartBars } from '../../../modal/chartbars';
import { StockChart } from '../../../modal/stockchart';
import { UIChart } from 'primeng/primeng';
import { Dropdown } from 'primeng/primeng';


interface SuggestionList {
    name: string;
    code: string;
}


@Component({
    selector: 'portfolio-chart',
    templateUrl: './portfolio-chart.component.html',
})
export class PortfolioChartComponent implements OnInit {
    userInvestmentList: Stock[] = new Array<Stock>();
    data: any;
    labels: String[] = new Array<String>();
    targetData: number[] = new Array<number>();
    achiveData: number[] = new Array<number>();
    myData: number[] = new Array<number>();

    stockSuggestorsList: SuggestionList[];

    selectedSuggestion: SuggestionList;

    constructor(private mpservice: MarketPlaceService) {

        this.stockSuggestorsList = [
            { name: 'WB-Stock Axis', code: 'WB-SA' },
            { name: 'PP-Stock Axis', code: 'PP-SA' },
            { name: 'MP-Stock Axis', code: 'MP-SA' },
            { name: 'Hemanth', code: 'Hemanth' },
            { name: 'Wealth', code: 'Wealth' }
        ];
    }

    ngOnInit() {
        this.getMyInvestmentList('WB-SA');
        console.log(this.stockSuggestorsList);
    }

    update(chart: UIChart) {

        console.log(this.selectedSuggestion);

        if (null !== this.selectedSuggestion) {
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
        mayBar.backgroundColor = '#FFC300';
        mayBar.borderColor = '#FFC300';
        mayBar.data = this.myData;
        chartData.datasets.push(mayBar);

        const achivedBar: ChartBars = new ChartBars();
        achivedBar.label = 'Achived';
        achivedBar.backgroundColor = '#581845';
        achivedBar.borderColor = '#581845';
        achivedBar.data = this.achiveData;
        chartData.datasets.push(achivedBar);

        const targetBar: ChartBars = new ChartBars();
        targetBar.label = 'Target';
        targetBar.backgroundColor = '#42A5F5';
        targetBar.borderColor = '#1E88E5';
        targetBar.data = this.targetData;
        chartData.datasets.push(targetBar);

        this.data = chartData;

        setTimeout(() => {
            chart.refresh();
        }, 200)

        console.log(this.data);

    }

    getMyInvestmentList(suggesterCode: String) {
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
                        if (stock.rcomBy === suggesterCode) {
                            this.labels.push(stock.script);
                            this.targetData.push(Math.round(stock.targetPercentage));
                            this.achiveData.push(Math.round(stock.achivedPercentage));
                            this.myData.push(Math.round(stock.myPercentage));
                        }
                    });
                }
            });
        });
    }
}
