import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class StocksService {
  private stocksUrl = 'api/stocks';

  constructor(private _httpClient: HttpClient) { }

  getStocks(): Observable<any> {
    return this._httpClient.get<any>(this.stocksUrl)
      .pipe(
        map(data => ({
          stocks: data.stocks,
          stockGraphData: data.stocks.map((stock: any) => {
            return [{
              name: stock.symbol,
              series: stock.values.map(value => ({name: value.time, value: value.value})),
              min: stock.values.reduce((min, value) => value.value - 10 < min ? value.value - 10 : min, Number.POSITIVE_INFINITY),
              max: stock.values.reduce((max, value) => value.value + 10 > max ? value.value + 10 : max, Number.NEGATIVE_INFINITY)
            }];
          })
        })),
        catchError(() => of({}))
      );
  }
}
