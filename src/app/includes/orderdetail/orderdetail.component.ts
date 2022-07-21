import { Component, OnInit } from '@angular/core';
import { InsertService } from '../../services/insert.service';
import { Orderdetail } from './orderdetail.model';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.scss']
})
export class OrderdetailComponent implements OnInit {
  htmlMsg:any;
  htmlPrice:any;
  myQuoteId:any;
  totalPrice:any;
  sessionValue:any;
  sessionValueEmail:any;
  myValue:any;

  orderdetail = new Orderdetail(); //call model of home 

  constructor(private ins:InsertService){ 
    this.orderdetail.minDate = new Date();
      this.orderdetail.minDate.setDate(this.orderdetail.minDate.getDate());
  } 



  ngOnInit(): void {
  }

  onSubmit() { 
    var getsession = sessionStorage.getItem("username");
    var sessionValueEmail = sessionStorage.getItem("useremail");
    console.log(sessionValueEmail);
    var fd =new FormData();

    this.ins.insertApi(fd).subscribe((data)=>{

  
      // console.log(data);
       this.myQuoteId = data['QuoteId']; // append quote id on final page after submit information and return response
       this.totalPrice = data['totalPrice']/2; // advance payment half
       this.sessionValue = getsession;
       this.sessionValueEmail = sessionValueEmail;
     });
  }

  onChangeLabour(event: any){      
    var selectedLabour = event.target.value;   
    var service = this.orderdetail.selectedService; 
    var city = this.orderdetail.city;          
    var truck_space1 =  this.orderdetail[0];
    var truck_space =  truck_space1[service];
    var getprice = this.orderdetail[0];
    var getCityPrices = getprice[city];
    var myCityprice=getCityPrices[0];
    var price=myCityprice[service];
    if(selectedLabour == '2 Men'){
      price = myCityprice[service]; 
    }else{
      price = myCityprice[service] * 2;
    }

    var message = 'You have selected <span class="text-danger">' + selectedLabour 
    + '</span> and <span class="text-danger">' + service  + '</span> truck at price <span class="text-danger">$' + price + '/hr </span>with parking space <span class="text-danger">' + truck_space + '</span>';
   
    document.getElementById("appendTxt").innerHTML = message;  
    this.htmlMsg = message;
    this.htmlPrice = price+'/hr';   //added price & message on third step 
    this.myValue = price; //add price in input type hidden  
}  

}
