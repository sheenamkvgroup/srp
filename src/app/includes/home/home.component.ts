import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { InsertService } from '../../services/insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {  
  htmlMsg:any;
  htmlPrice:any;
  step: any = 1;
  totalPrice:any;
  calculatedPrice:any;
  QuoteId:any;
  stringifiedData: any;  
  myQuoteId:any;
  sessionValue:any;
  sessionValueEmail:any;
  sessionValueName:any;
  sessionValuephone:any;
  nameInput:any;
  numberInput:any;
  calcprice:any;
  
  home = new Home(); //call model of home 
  tb_PremiumQuoteIDPK: string;
 
  constructor(private ins:InsertService , private router:Router){ 
    this.home.minDate = new Date();
    this.home.minDate.setDate(this.home.minDate.getDate());
  } 
  ngOnInit(){}

  onSubmit() { 
           
    //SESSION SET  
    sessionStorage.setItem("username",this.home.name);
    sessionStorage.setItem("useremail",this.home.email);
    sessionStorage.setItem("phone",this.home.phone);
    sessionStorage.setItem("date",this.home.date);
    sessionStorage.setItem("selectedShift",this.home.selectedShift);
    sessionStorage.setItem("selectedMoving",this.home.selectedMoving);
    sessionStorage.setItem("pick",this.home.pick);
    sessionStorage.setItem("drop",this.home.drop);
   
       var sessionValueName = sessionStorage.getItem("username");
       var sessionValueEmail = sessionStorage.getItem("useremail");
       var sessionValuephone = sessionStorage.getItem("phone");
       var sessionValuedate = sessionStorage.getItem("date");
       var sessionValueselectedShift = sessionStorage.getItem("selectedShift");
       var sessionValueselectedMoving = sessionStorage.getItem("selectedMoving");
       var sessionValuepick = sessionStorage.getItem("pick");
       var sessionValuedrop = sessionStorage.getItem("drop");
       
      this.step = this.step + 1;
      
      var fd =new FormData();
      fd.append("name",this.home.name);
      fd.append("email",this.home.email);
      fd.append("phone",this.home.phone);
      fd.append("date",this.home.date);
      fd.append("selectedShift",this.home.selectedShift);
      fd.append("selectedMoving",this.home.selectedMoving);
      fd.append("pick",this.home.pick);
      fd.append("drop",this.home.drop);
      fd.append("selectedBedroom",this.home.selectedBedroom);
      fd.append("selectedSlot",this.home.selectedSlot);
      fd.append("selectedStairs",this.home.selectedStairs);
      fd.append("selectedLift",this.home.selectedLift);
      fd.append("selectedService",this.home.selectedService);
      fd.append("selectedLabour",this.home.selectedLabour);    
      fd.append("message",this.home.message);
      fd.append("totalPrice",sessionStorage.getItem("calculatedPrice"));
      fd.append("city",this.home.city);

      var itemarr = this.home.itemsArray;
      for (let index = 0; index < itemarr.length; index++) {
        var itemIndx = itemarr[index];
        const element = itemarr[index];
        fd.append(itemIndx.name,itemIndx.qty);
      }
       if(this.step == "3"){
        this.ins.insertApi(fd).subscribe((data)=>{        
        console.log('Requested Data-'+data);
        this.myQuoteId = data['QuoteId']; // append quote id on final page after submit information and return response
        //console.log(this.myQuoteId);
        var kotid = this.myQuoteId;
        sessionStorage.setItem("kotID",kotid);
        var kotID = sessionStorage.getItem("kotID");
        this.totalPrice = data['totalPrice']/2; // advance payment half
        this.sessionValue = sessionValueName;
        this.sessionValueEmail = sessionValueEmail;
        
      });
    }
  }

    

AdeldeTrucks:any=[ {"4.5 Ton":"110", "6.5 Ton":"130", "8 Ton":"140", "10 Ton":"150"} ];
BrisTrucks:any=[ {"4.5 Ton":"150", "6.5 Ton":"160", "8 Ton":"170", "10 Ton":"170"} ];
CanTrucks:any=[ {"4.5 Ton":"65", "6.5 Ton":"75", "8 Ton":"75", "10 Ton":"75"} ];
MelbTrucks:any=[ {"4.5 Ton":"140", "6.5 Ton":"160", "8 Ton":"170", "10 Ton":"180"} ];
PethTrucks:any=[ {"4.5 Ton":"150", "6.5 Ton":"160", "8 Ton":"170", "10 Ton":"170"} ];
SydnTrucks:any=[ {"4.5 Ton":"140", "6.5 Ton":"160", "8 Ton":"170", "10 Ton":"170"} ];
allcities:any=[ {   "Adelaide":this.AdeldeTrucks,
                    "Brisbane":this.BrisTrucks, 
                    "Canberra":this.CanTrucks, 
                    "Melbourne":this.MelbTrucks, 
                    "Perth":this.PethTrucks,
                    "Sydney":this.SydnTrucks 
            }];

truckSpace:any=[{  "4.5 Ton":"7M Long & 4M Wide", 
                    "6.5 Ton":"10M Long and 4M Wide", 
                    "8 Ton":"12M Long and 4M Wide", 
                    "10 Ton":"12M Long and 4M Wide" 
                }];
    // onChangeCity(event: any){      
    //   var serv = event.target.value; 
    //   alert(serv)
    //   //this.hideOrShow();     
    // }
    onChangeCity(event: any){      
      var city = event.target.value; 
      this.home.selectedLabour = "null";
      this.home.selectedService = "null";      
      document.getElementById("appendTxt").innerHTML = "";
    }

    onChangeLabour(event: any){       
      var selectedLabour = event.target.value; 
      var service = this.home.selectedService; 
      var city = this.home.city;   
      if (typeof city == 'undefined' || city == '') {      
        alert('Select city before selecting labour');
      }       
      if(selectedLabour == '' || typeof selectedLabour == 'undefined'){
        alert('Select labour before selecting service');
      }  
      var truck_space1 =  this.truckSpace[0];
      var truck_space =  truck_space1[service];
      var getprice = this.allcities[0];
      var getCityPrices = getprice[city];
      var myCityprice=getCityPrices[0];
      var price=myCityprice[service];
      if(selectedLabour == '2 Men'){
        price = myCityprice[service]; 
      }else{
        price = myCityprice[service] * 2;
      }

      
      if(service != "null" && selectedLabour != "null" && city != "null"){
       // alert('IF-'+service);
          var message = 'You have selected <span class="text-danger">' + selectedLabour 
          + '</span> and <span class="text-danger">' + service  + '</span> truck at price <span class="text-danger">$' + price + '/hr </span>with parking space <span class="text-danger">' + truck_space + '</span>';
     
          document.getElementById("appendTxt").innerHTML = message;  
          this.htmlMsg = message;
          this.htmlPrice = price+'/hr';   //added price & message on third step 
          this.calculatedPrice = price; //add price in input type hidden  
          sessionStorage.setItem("calculatedPrice",this.calculatedPrice);
          var calcprice = sessionStorage.getItem("calculatedPrice");
          console.log(calcprice);
      }else{
        var message = "";
      }
      
    }

    // hideOrShow() {
    //   var displayClass;
     
    //   if(this.home.selectedService) {
    //    displayClass = {
    //      'display-div': true
    //     }
    //   }
    //   else {
    //    displayClass = {
    //     'hide-div': true
    //    }
    //   }
    //   return displayClass;
    //  }
   
    onChangeService(event: any){  
      var selectedLabour = this.home.selectedLabour; 
      var service = event.target.value; 
      var city = this.home.city; 
      if (typeof city == 'undefined' || city == '') {      
        alert('Select city before selecting labour');
      }       
      if(selectedLabour == '' || typeof selectedLabour == 'undefined'){
        alert('Select labour before selecting service');
      }  
      var truck_space1 =  this.truckSpace[0];
      var truck_space =  truck_space1[service];
      var getprice = this.allcities[0];
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
      this.calculatedPrice = price; //add price in input type hidden  
      sessionStorage.setItem("calculatedPrice",this.calculatedPrice);
      var calcprice = sessionStorage.getItem("calculatedPrice");
      console.log(calcprice);
  }  


  previous() {
    this.step = this.step - 1;
    this.home.selectedLabour = "";
    this.home.selectedService = "";      
    document.getElementById("appendTxt").innerHTML = "";
  }
  public items = [
    { optionId: 'option1', optionTitle: 'option 1'},
    { optionId: 'option2', optionTitle: 'option 2'},
    { optionId: 'option3', optionTitle: 'option 3'},
    { optionId: 'option4', optionTitle: 'option 4'},
  ];

}
