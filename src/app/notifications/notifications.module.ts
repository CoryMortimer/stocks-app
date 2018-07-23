import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentMenuModule } from '@covalent/core/menu';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { NotificationsComponent } from './notifications.component';

@NgModule({
  imports: [
    CommonModule,
    CovalentMenuModule,
    CovalentNotificationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  declarations: [NotificationsComponent],
  exports: [NotificationsComponent]
})
export class NotificationsModule { }
