import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StocksService } from './stocks.service';

describe('StocksService', () => {
  let service: StocksService;
  let httpMock: HttpTestingController;
  let testStocks;

  beforeEach(() => {
    testStocks = {
      stocks: [
        {
          name: 'Dow Jones Industrial Average',
          symbol: 'DJI',
          value: 25058.12,
          isUp: false,
          valueChange: 6.38,
          percentChange: 0.025,
          values: [
            {
              time: '9:30',
              value: 25041.14
            },
            {
              time: '10:00',
              value: 25059.57
            },
            {
              time: '11:00',
              value: 25082.61
            },
            {
              time: '12:00',
              value: 25098.40
            },
            {
              time: '1:00',
              value: 25095.71
            },
            {
              time: '2:00',
              value: 25082.62
            },
            {
              time: '3:00',
              value: 25073.04
            },
            {
              time: '4:00',
              value: 25057.00
            }
          ]
        }
      ]
    };
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
    const expectedStockGraphData = [[{
      name: testStocks.stocks[0].symbol,
      series: [{name: '9:30', value: 25041.14}, {name: '10:00', value: 25059.57}, {name: '11:00', value: 25082.61},
        {name: '12:00', value: 25098.40}, {name: '1:00', value: 25095.71}, {name: '2:00', value: 25082.62},
        {name: '3:00', value: 25073.04}, {name: '4:00', value: 25057.00}],
      min: 25031.14,
      max: 25108.4
    }]];
    service.getStocks()
      .subscribe(
        stockData => {
          expect(stockData.stocks).toBe(testStocks.stocks, 'stockData.stocks was not test data');
          expect(stockData.stockGraphData).toEqual(expectedStockGraphData, 'stockData.stockGraphData was not expected');
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
