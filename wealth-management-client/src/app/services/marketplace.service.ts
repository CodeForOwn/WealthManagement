import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../core/constants';

@Injectable()
export class MarketPlaceService {

  // private uri:string = 'http://52.230.1.144/stock/quote/';

  constructor(private apiService: ApiService) {

  }

  public getCMPForScripts(script: string): Observable<any> {
    script = script + '.NS';
    let api = Constants.api + script + Constants.queryString;
    console.log('URI: ', api);
    return this.apiService.get(api);
  }
}
