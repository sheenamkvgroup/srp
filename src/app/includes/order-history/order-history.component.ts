import { Component, OnInit } from '@angular/core';
import {FetchHistoryService} from '../../services/fetch-history.service';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'Order History';
  getHistoryData:any;
  tb_PremiumQuoteIDPK:any;
  constructor(private getData:FetchHistoryService) {
    getData.getHistoryData().subscribe((data)=>{
      console.log("Response"+data);
      this.getHistoryData = data;
    });
  }
}
