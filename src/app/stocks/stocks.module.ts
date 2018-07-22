import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { StocksComponent } from './stocks.component';
import { StockSummaryComponent } from './stock-summary/stock-summary.component';
import { StocksService } from './stocks.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    NgxChartsModule
  ],
  declarations: [StocksComponent, StockSummaryComponent],
  providers: [StocksService],
  exports: [StocksComponent, StockSummaryComponent]
})
export class StocksModule { }
