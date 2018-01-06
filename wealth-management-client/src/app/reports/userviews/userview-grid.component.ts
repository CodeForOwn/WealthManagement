import { Component } from '@angular/core';
import { MyStock } from '../../modal/mystock';
import * as myStocks from '../../data/my-investment.json';

@Component({
  selector: 'userview-grid',
  templateUrl: './userview-grid.component.html',
  styleUrls: ['./userview-grid.component.css']
})
export class UserviewGridComponent {
  userInvestmentList: MyStock[] = new Array<MyStock>();
  scripts: string[] = new Array<string>();

  constructor() {
    this.getMyInvestmentList();
  }

  getMyInvestmentList() {
    let myStocksData = JSON.parse(JSON.stringify(myStocks));
    myStocksData.map(data => {
        let mystock: MyStock = new MyStock();
        mystock.setData(data);
        this.userInvestmentList.push(mystock);
    });
  }

}
