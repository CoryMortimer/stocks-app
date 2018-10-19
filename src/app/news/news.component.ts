import { Component } from '@angular/core';

import { appear } from '../animations';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: appear
})
export class NewsComponent { }
