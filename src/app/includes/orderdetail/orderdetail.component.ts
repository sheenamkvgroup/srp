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
name:any;
strIntoObj2: any;
ngOnInit(): void {} 

constructor(private getData:OrderDetailService) {    
  
    getData.getOrderDetail().subscribe((data)=>{
     
   var myObject =JSON.stringify(data);
   //console.log("stringfydata-"+myObject );   
    var str = myObject; // your response in a string
    this.strIntoObj = JSON.parse(str);
    var user = this.strIntoObj[0];  
    //console.log(user); 
    var itemarr = JSON.stringify(user.OtherItems);  
    var strIntoObj2 = JSON.parse(itemarr);

    //var artikel = unserialize('a:1:{i:0;s:44:"{"name":"Mario","pw":"3214","email":"mo@mo"}";}');


    console.log(strIntoObj2); 
    //console.log('string-'+itemarr);  
    //for (let index = 0; index < data.length; index++) {
    //var itemIndx = itemarr[index];
   // const obj = JSON.parse(data);
    
 
    //}
    //console.log(itemarrrr.name); 
  });
}
}
