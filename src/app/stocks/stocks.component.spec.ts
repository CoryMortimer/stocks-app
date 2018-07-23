import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StocksComponent } from './stocks.component';
import { StocksModule } from './stocks.module';
import { stockData } from '../../testing';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  beforeEach(async(() => {
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
    component.data = stockData[0];
    fixture.detectChanges();
    const charts = fixture.nativeElement.querySelectorAll('ngx-charts-line-chart');
    expect(charts.length).toBe(1, `charts.length is ${charts.length}`);
  });
});
