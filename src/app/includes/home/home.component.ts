import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { InsertService } from '../../services/insert.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
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
      window.scrollTo(0, 0)

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
      window.scrollTo(0, 0)
    }
    
}
