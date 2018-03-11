import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../core/constants';
import { TSMap } from "typescript-map";
import { Stock } from '../modal/stock';

@Injectable()
export class StockDataService {

    stockDataMap = new TSMap<String, Stock>();

    constructor() {

    }

    public clearStockData() {
        this.stockDataMap.clear();
    }

    public addStock(code: String, stock: Stock) {
        this.stockDataMap.set(code, stock);
    }

    public getStock(code: String): Stock {
        return this.stockDataMap.get(code);
    }

    public removeStock(code: String) {
        this.stockDataMap.delete(code);
    }

    public isStockDataEmpty(){
        if (this.stockDataMap != null && this.stockDataMap.size() === 0){
            return true;
        }
        return false;
    }

}