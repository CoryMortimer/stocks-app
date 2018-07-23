import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ArticlesModule } from '../articles/articles.module';
import { StocksModule } from '../stocks/stocks.module';
import { NotificationsModule } from '../notifications/notifications.module';

@NgModule({
  imports: [
    CommonModule,
    CovalentLayoutModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    ArticlesModule,
    StocksModule,
    NotificationsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
