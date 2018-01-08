import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../core/constants';

@Injectable()
export class MarketPlaceService {

  constructor(private apiService: ApiService) {

  }

  public getCMPForScripts(script: string, exchange: string): Observable<any> {
    if (exchange === 'NSE') {
      script = script + '.NS';
    }
    if (exchange === 'BSE') {
      script = script + '.BO';
    }
    let api = Constants.api + script + Constants.queryString;
    return this.apiService.get(api);
  }
}
