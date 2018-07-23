import { Component, OnInit } from '@angular/core';

import { StocksService } from '../stocks/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  view;
  stocks;
  maxArticles = 3;
  stockData: any;

  constructor(private _stocksService: StocksService) { }

  ngOnInit() {
    this._stocksService.getStocks()
      .subscribe(stockData => {
        this.stocks = stockData.stocks;
        this.stockData = stockData.stockGraphData
      });
  }

  // Fix to get around chart sizing issues
  updateCharts() {
    this.view = [0,0];
    setTimeout(() => {
      this.view = null;
    });
  }
}
