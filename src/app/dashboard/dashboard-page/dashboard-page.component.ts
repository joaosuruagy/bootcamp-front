import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashBoardService: DashboardService) { }

  ngOnInit(): void {
    this.fetStocks();
  }

  async fetStocks(): Promise<void>
  {
    this.stocks = await this.dashBoardService.getStock();
    console.log(this.stocks);
  }

}
