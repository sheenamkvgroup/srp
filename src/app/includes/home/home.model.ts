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
    {itemID: 1,icon: "assets/images/singlebed.png",name: "single bed",qty: 0},
    {itemID: 2,icon: "assets/images/singlebed.png",name: "drawers",qty: 0},
    {itemID: 3,icon: "assets/images/singlebed.png",name: "microwave",qty: 0},

    {itemID: 4,icon: "assets/images/singlebed.png",name: "double bed",qty: 0},
    {itemID: 5,icon: "assets/images/singlebed.png",name: "TV (Plasmal/CD)",qty: 0},
    {itemID: 6,icon: "assets/images/singlebed.png",name: "stools",qty: 0},

    {itemID: 7,icon: "assets/images/singlebed.png",name: "queen bed",qty: 0},
    {itemID: 8,icon: "assets/images/singlebed.png",name: "coffee table",qty: 0},
    {itemID: 9,icon: "assets/images/singlebed.png",name: "dishwasher",qty: 0},

    {itemID: 10,icon: "assets/images/singlebed.png",name: "king bed",qty: 0},
    {itemID: 11,icon: "assets/images/singlebed.png",name: "cabinet",qty: 0},
    {itemID: 12,icon: "assets/images/singlebed.png",name: "washing machine",qty: 0},

    {itemID: 13,icon: "assets/images/singlebed.png",name: "bedside tables",qty: 0},
    {itemID: 14,icon: "assets/images/singlebed.png",name: "piano",qty: 0},
    {itemID: 15,icon: "assets/images/singlebed.png",name: "clothes dryer",qty: 0},

    {itemID: 16,icon: "assets/images/singlebed.png",name: "dresser",qty: 0},
    {itemID: 17,icon: "assets/images/singlebed.png",name: "refrigertor",qty: 0},
    {itemID: 18,icon: "assets/images/singlebed.png",name: "toy box",qty: 0}

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