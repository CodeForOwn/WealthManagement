import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MarketPlaceService {

  private uri:string = 'http://52.230.1.144/stock/quote/';

  constructor(private apiService : ApiService) {

  }

  public getCMPForScripts(script: string) : Observable<any> {
    console.log('URI: ', this.uri + script);
    return this.apiService.get(this.uri + script);
  }
}
