import { Component, OnInit } from '@angular/core';
import { Orderdetail } from './orderdetail.model';
import { OrderDetailService } from '../../services/order-detail.service';
@Component({
  selector: 'order detail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.scss']
})
export class OrderdetailComponent implements OnInit {  

  orderdetail = new Orderdetail(); //call model of home 
  strIntoObj: OrderdetailComponent[];
  myObject:any; 
  Name: any;
  tb_PremiumQuoteIDPK:any;
  Dated:any;
  Mobile:any;
  Email:any;
  TimeSlot:any;
  MoveType:any;
  pickUp:any;
  dropOff:any;  
NoOfBedrooms:any;
Stairs:any;
Lifts:any;
ServicePrice:any;
Message:any;
Time:any;
RefrenceID:any;
PaymentOnTime:any;
PaymentStatus:any;
OtherData:any;
tbPermiumQuotes:any;
Local_Interstate:any;
Service:any;
Labour:any;
OtherItems:any;





  ngOnInit(): void {
  } 

  constructor(private getData:OrderDetailService) {    
    var id = '1';
    getData.getOrderDetail().subscribe((data)=>{
     
   var myObject = JSON.stringify(data);
    console.log("stringfyData-"+myObject );   
    var str = myObject; // your response in a string
    this.strIntoObj = JSON.parse(str);
    var user = this.strIntoObj[0];   
    var itemarr = user.OtherItems;
      for (let index = 0; index < itemarr.length; index++) {
        var itemIndx = itemarr[index];
        var element = itemarr[index];
        //var itemName = itemIndx.name
        //var itemQty = itemIndx.qty;
      }
    console.log(itemIndx); 
    console.log(element);
  });
}

}
