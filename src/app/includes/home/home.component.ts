import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { InsertService } from '../../services/insert.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  visibility;
  step: any = 1;
  home = new Home(); //call model of home 
  constructor(private ins:InsertService){ 
    this.home.minDate = new Date();
      this.home.minDate.setDate(this.home.minDate.getDate());
  } 
  ngOnInit(){ }
  onSubmit() { 
      this.step = this.step + 1;
      console.log(this.home);

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

      var itemarr = this.home.itemsArray;
      for (let index = 0; index < itemarr.length; index++) {
        var itemIndx = itemarr[index];
        const element = itemarr[index];
        fd.append(itemIndx.name,itemIndx.qty);
      }

      this.ins.insertApi(fd).subscribe((data)=>{
        console.log(data);
      });

    }

    previous() {
      this.step = this.step - 1;
    }


AdeldeTrucks:any=[ {"4.5 Ton":"150", "6.5 Ton":"130", "8 Ton":"140", "10 Ton":"150"} ];

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

    onChangeLabour(event: any){   
      var service = this.home.selectedService;
      console.log(service);
      if(service){
        this.visibility.style.display = 'block';
      } 
      var city = this.home.city;
      var selectedLabour = event.target.value;       
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
      + '</span> and <span class="text-danger">' + service  + '</span> truck at price <span class="text-danger">$' + price + ' </span>with parking space <span class="text-danger">' + truck_space + '</span>';

      document.getElementById("appendTxt").innerHTML = message;              
  }
}