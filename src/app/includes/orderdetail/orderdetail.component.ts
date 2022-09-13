import { Component, OnInit } from '@angular/core';
import { Orderdetail } from './orderdetail.model';
import { OrderDetailService } from '../../services/order-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

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
items:any;
parsedJsonData: any;
parsedJsonItems: any;
dataObject: any; 
itemObject: any;
public href: string = "";
itemstrIntoObj: any;
    mapper: any;
    ismapped: boolean;
   itemsArr:any;
   itemsArray:any;
   length:any;
   showData: any[] = [];
ngOnInit(): void {} 

constructor(private route: ActivatedRoute,private getData:OrderDetailService,private router: Router) { 
    // var url = this.router.url;
    // var path = url.split('QOB').pop();
    // console.log('qtid-'+path);

getData.getOrderDetail().subscribe((data)=>{
   
      let result= <any>data;
      this.mapper= result;
      console.log(this.mapper);
      this.ismapped=false;
      for (let index = 0; index < this.mapper.length; index++) {
        const element = this.mapper[index];
        this.OtherItems = element.OtherItems;
        //console.log(element);
       //console.log(this.OtherItems['single_bed']);
        
      }
     // this.itemsArr =  this.OtherItems;
     //console.log(this.itemsArr);
     this.showData.push(this.OtherItems);
     //console.log(this.showData);   
});
}
}