import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Item } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'pwa-ng';
  items: Array<Item>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.fetch().subscribe((data: Array<Item>) => {
      console.log('%c Data fetched from api service:', 'color: salmon; font-size: 1rem; font-weight: bold');
      console.log(data);
      this.items = data;
    }, (err) => {
      console.error(err);
    });
  }
}
