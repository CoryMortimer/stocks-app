import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSummaryComponent } from './stock-summary.component';
import { StocksModule } from '../stocks.module';

describe('StockSummaryComponent', () => {
  let component: StockSummaryComponent;
  let fixture: ComponentFixture<StockSummaryComponent>;
  let stockData;

  function verifyDOM(isUp) {
    const arrow = isUp ? 'arrow_upward' : 'arrow_downward';
    const positiveOrNegative = isUp ? '+' : '-';
    const symbolElement = fixture.nativeElement.querySelector('.mat-headline');
    const arrowElement = fixture.nativeElement.querySelector('.text-30');
    const valueElement = fixture.nativeElement.querySelector('.mat-title');
    const changeElement = fixture.nativeElement.querySelector('.mat-subheading-2');
    expect(symbolElement.innerText).toBe(stockData.symbol, `Stock symbol is ${symbolElement.innerText}`);
    expect(arrowElement.innerText).toBe(arrow, `Stock arrow is ${arrowElement.innerText}`);
    expect(valueElement.innerText).toBe(`${stockData.value}`, `Stock value is ${valueElement.innerText}`);
    expect(changeElement.innerText).toBe(
      `${positiveOrNegative}${stockData.valueChange} (${stockData.percentChange}%)`,
      `Change value is ${changeElement.innerText}`
    );
  }

  beforeEach(async(() => {
    stockData = {
      name: 'Dow Jones Industrial Average',
      symbol: 'DJI',
      value: 25058.12,
      isUp: false,
      valueChange: 6.38,
      percentChange: 0.025,
      values: []
    };
    TestBed.configureTestingModule({
      imports: [StocksModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show stock data when it is up', () => {
    stockData.isUp = true;
    component.stock = stockData;
    fixture.detectChanges();
    verifyDOM(true);
  });

  it('should show stock data when it is down', () => {
    component.stock = stockData;
    fixture.detectChanges();
    verifyDOM(false);
  });
});
