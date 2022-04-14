import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/global.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public searchHistory: any;

  constructor(public global: Global) {
  }

  ngOnInit(): void {
    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  }

}
