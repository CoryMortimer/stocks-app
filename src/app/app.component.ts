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
  }];
}
