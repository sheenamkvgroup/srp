import { ArrayType } from "@angular/compiler";

export class Home {
 

  title = 'appBootstrap';
  name: string;
  email: string;
  phone: string;
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
  message:string;
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

  itemsArray:any=[
    {
        itemID: 1,
        icon: "assets/images/singlebed.png",
        name: "drawer",
        qty: 0
    },
    {
        itemID: 2,
        icon: "assets/images/singlebed.png",
        name: "sofa",
        qty: 0
    }
  ];

  inc(item){
    console.log(item);
    item.qty = item.qty+1;
  }

  dec(item){
    console.log(item);
    item.qty = item.qty-1;
  }
}