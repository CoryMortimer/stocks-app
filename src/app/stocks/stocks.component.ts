import { Component, Input } from '@angular/core';

// Use component as an attribute selector to get around sizing issues
@Component({
  selector: '[app-stocks]',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent {
  @Input() data?;
  @Input() view?;
  colorScheme: {domain: string[]} = {
    domain: ['#2e7d32']
  };
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Time';
  yAxisLabel = 'Value';
}
