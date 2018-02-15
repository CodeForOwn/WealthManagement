import { ChartBars } from './chartbars';

export class StockChart {

    labels: Array<String>;
    datasets: Array<ChartBars>;

    StockChart() {
        this.labels = new Array<String>();
        this.datasets = new Array<ChartBars>();
    }
}
