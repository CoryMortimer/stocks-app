import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StocksService } from './stocks.service';
import { stocks, stockData } from '../../testing';

describe('StocksService', () => {
  let service: StocksService;
  let httpMock: HttpTestingController;
  let testStocks;

  beforeEach(() => {
    testStocks = JSON.parse(JSON.stringify(stocks));
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StocksService]
    });
  });

  beforeEach(inject([StocksService, HttpTestingController], (stocksService: StocksService, httpTesting: HttpTestingController) => {
    service = stocksService;
    httpMock = httpTesting;
  }));

  it('should be created', inject([StocksService], (service: StocksService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable converted stock data', () => {
    service.getStocks()
      .subscribe(
        data => {
          expect(data.stocks).toBe(testStocks.stocks, 'stockData.stocks was not test data');
          expect(data.stockGraphData).toEqual(stockData, 'stockData.stockGraphData was not expected');
        }
      );
    const request = httpMock.expectOne('api/stocks');
    expect(request.request.method).toBe('GET');
    request.flush(testStocks);
  });

  it('should return an empty object on error', () => {
    service.getStocks()
      .subscribe(
        stockData => {
          expect(stockData).toEqual({}, `Incorrectly returned object ${stockData}`);
        }
      );
    const request = httpMock.expectOne('api/stocks');
    expect(request.request.method).toBe('GET');
    request.flush(null, {status: 400, statusText: 'Bad Request'});
  });
});
