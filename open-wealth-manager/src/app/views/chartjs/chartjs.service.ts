import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChartJSService {

  constructor(private apiService : ApiService) {

  }

  public getCmpArray(scripts: string[]): Observable<any>[] {
    return scripts.map(script => {
      return this.apiService.get('http://10.142.233.78:1307/quote/'+script);
    });
  }
}
