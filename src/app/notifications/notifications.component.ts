import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  numberOfNotifications = 1;
  notifications = [{
    message: 'The stock market is trending positively.',
    time: '22 minutes ago'
  }];

  dismissNotifications() {
    if (!this.numberOfNotifications) {
      this.notifications = [];
    }
    this.numberOfNotifications = 0;
  }
}
