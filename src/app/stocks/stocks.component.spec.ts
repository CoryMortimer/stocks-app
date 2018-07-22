import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StocksComponent } from './stocks.component';
import { StocksModule } from './stocks.module';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;
  let stockData;

  beforeEach(async(() => {
    stockData = [{
      name: 'DJI',
      series: [{name: '9:30', value: 25041.14}, {name: '10:00', value: 25059.57}, {name: '11:00', value: 25082.61},
        {name: '12:00', value: 25098.40}, {name: '1:00', value: 25095.71}, {name: '2:00', value: 25082.62},
        {name: '3:00', value: 25073.04}, {name: '4:00', value: 25057.00}],
      min: 25031.14,
      max: 25108.4
    }];
    TestBed.configureTestingModule({
      imports: [
        StocksModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create and display stock chart', () => {
    component.data = stockData;
    fixture.detectChanges();
    const charts = fixture.nativeElement.querySelectorAll('ngx-charts-line-chart');
    expect(charts.length).toBe(1, `charts.length is ${charts.length}`);
  });
});
