import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  step: any = 1;
  name: string;
  email: string;
  number: Number
  date: any;
  
  pick: string;
  drop: string;
  textarea: string;

  selectedShift: string;
  selectedMoving: string;
  selectedBedroom: string
  selectedSlot: string;
  selectedStairs: string;
  selectedLift: string;
  selectedService: string;
  selectedLabour: string;

  minDate: Date;


  s=null;

  options = [
    { name: "option1", value: 1 },
    { name: "option2", value: 2 },
  ]

  optionsM = [
    { name: "option1", value: 3},
    { name: "option2", value: 4 },
  ]

  optionsB = [
    { name: "option1", value: 5},
    { name: "option2", value: 6},
  ]

  optionsT = [
    { name: "option1", value: 7},
    { name: "option2", value: 8},
  ]

  optionsST = [
    { name: "option1", value: 9},
    { name: "option2", value: 10},
  ]

  optionsL = [
    { name: "option1", value: 11},
    { name: "option2", value: 12},
  ]

  optionsSE = [
    { name: "option1", value: 13},
    { name: "option2", value: 14},
  ]

  optionsH = [
    { name: "option1", value: 15},
    { name: "option2", value: 16},
  ]


  title = 'appBootstrap';

  qty=0;

  // increment product qty
  incrementQty() {
    console.log(this.qty+1);
    this.qty += 1;
  }

  // decrement product qty
  decrementQty() {
    if(this.qty-1 < 1 ){
      this.qty = 0
      console.log('1->'+this.qty);
    }else{
      this.qty -= 1;
      console.log('2->'+this.qty);
    }
  }

  submitForm() {
    this.step = this.step + 1;

  }

  previous() {
    this.step = this.step - 1;
  }
  
  constructor() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  ngOnInit(): void { }

}
