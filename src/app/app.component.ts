import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: Object[] = [{
    title: 'Dashboard',
    route: '/',
    icon: 'dashboard',
  }, {
    title: 'News Creator',
    route: '/news-creator',
    icon: 'note_add',
  }, {
    title: 'News',
    route: '/news',
    icon: 'trending_up',
  }];
}
