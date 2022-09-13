import { Component, OnInit } from '@angular/core';
import {FetchHistoryService} from '../../services/fetch-history.service';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  tb_PremiumQuoteIDPK: any;
  strIntoObj: any;
  ngOnInit(): void {
  }
  title = 'Order History';
  getHistoryData:any;
  constructor(private getData:FetchHistoryService) {
    getData.getHistoryData().subscribe((data)=>{     
      this.getHistoryData = data;  
      console.log(this.getHistoryData);
      // var myObject =JSON.stringify(this.getHistoryData); 
      // this.strIntoObj = JSON.parse(myObject);
      // var user = this.strIntoObj[0]; 
      // var itemObject = user.tb_PremiumQuoteIDPK;
      // console.log(itemObject);
    });
  }
}
