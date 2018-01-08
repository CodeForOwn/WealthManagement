import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

import { ChartJSService } from './chartjs.service';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {

  @ViewChild("baseChart") chart: BaseChartDirective;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['ALANKIT' , 'EKC' /*, 'JSWENERGY', 'WELENT', 'SANGHIIND', 'SBIN', 'KABRAEXTRU', 'AVANTI', 'MOIL', 'PLASTIBLEN', 'PREMCO', 'SHRIRAMCIT', 'TATASTEEL', 'TEJASNET', 'VTL', 'APARINDS', 'AVANTI', 'CAPACITE', 'RAYMOND', 'SARDAEN', 'JMFINANCIL', 'DAAWAT', 'NESCO', 'PARAGMILK', 'PRAKASH', 'PSPPROJECT', 'RATNAMANI', 'SHARDA', 'SURYAROSNI', 'BEL', 'BHARTIARTL', 'DRREDDY', 'GUJGASLTD', 'IOC', 'LTTS', 'MAHINDCIE', 'NATIONALUM', 'PARAGMILK', 'PNBHOUSING', 'RECLTD', 'ZEELEARN' */];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [52.9 , 48.5 /*, 81.5, 176.65, 120, 300, 138, 2642, 208, 478, 660, 2473, 701, 330, 1113.5, 785, 1749, 412, 1042, 468, 164.75, 89.65, 514.0, 249.5, 145.0, 480.0, 1080.0, 2727, 321, 171.95, 503.9, 2405.6, 829.55, 410.0, 768.0, 248.9, 82.5, 247.5, 1420.95, 157, 46.7 */], label: 'Recommended' },
    { data: [], label: 'Acheived' },
    { data: [100 , 95 /*, 140, 350, 250, 350, 280, 3435, 310, 717, 1060, 3464, 875, 500, 1668, 982, 2185, 515, 1300, 585, 250, 134, 771, 386, 219, 712, 1620, 4125, 482, 200, 650, 3500, 1123.0, 520.0, 915.0, 330.0, 100.0, 320.0, 1750, 220, 60.0 */], label: 'Target' }
    // 80, 65, 75, 200, 150, 250, 180, 2435, 210, 517, 460, 364, 475, 300, 1468, 582, 1185, 415, 1300, 585, 250, 134, 771, 386, 219, 712, 1620, 4125, 482, 200, 650, 3500, 1123.0, 520.0, 915.0, 330.0, 100.0, 320.0, 1750, 220, 60.0
  ];

  constructor(private chartsJsService : ChartJSService) {

  }

  ngOnInit() {
    console.log(this.chart);
    this.getData();
    if (this.chart !== undefined) {
      this.chart.ngOnDestroy();
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
    }
  }

  getData() {
    console.log('Inside getData')
    let dataObs: Observable<any>[] = this.chartsJsService.getCmpArray(this.barChartLabels);
    dataObs.map(dataObservable => {
      dataObservable.subscribe(data => {
        console.log('data is ', data);
      })
    })
  }

  refreshChart() {
    console.log('Refresh the chart.. ', this.chart);
    if (this.chart !== undefined) {
      this.chart.ngOnDestroy();
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
    }
  }


    // Doughnut
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType = 'doughnut';

    // Radar
    public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    public radarChartData: any = [
      {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
    ];
    public radarChartType = 'radar';

    // Pie
    public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType = 'pie';

    // PolarArea
    public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend = true;

    public polarAreaChartType = 'polarArea';
  
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
