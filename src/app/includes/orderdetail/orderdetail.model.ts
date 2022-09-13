import { ArrayType } from "@angular/compiler";
import { FormControl } from "@angular/forms";

export class Orderdetail {

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
  city:any;
  totalPrice:any;
  myValue:any;
  QuoteId:any;
  tb_PremiumQuoteIDPK: any;

  options = [
    { name: "Home", value: "Home" },
    { name: "Office", value: "Office" },
  ]

  optionsM = [
    { name: "Interstate", value: "Interstate"},
    { name: "Local", value: "Local" },
  ]

  optionsB = [
    { name: "1", value: "1"},
    { name: "2", value: "2"},
    { name: "3", value: "3"},
    { name: "4", value: "4"},
    { name: "5", value: "5"}
  ]

  optionsT = [
    { name: "Morning", value: "Morning"},
    { name: "Afternoon", value: "Afternoon"},
    { name: "Evening", value: "Evening"},
  ]

  optionsST = [
    { name: "Yes", value: "Yes"},
    { name: "No", value: "No"},
  ]

  optionsL = [
    { name: "Yes", value: "Yes"},
    { name: "No", value: "No"},
  ]

  optionsSE = [
    { name: "4.5 Ton", value: "4.5"},
    { name: "6.5 Ton", value: "6.5"},
    { name: "8 Ton", value: "8"},
    { name: "10 Ton", value: "10"},
  ]

  optionsH = [
    { name: "2 Men", value: "2"},
    { name: "4 Men", value: "4"},
  ]

  cityArray = [
    { name:"Adelaide"},
    { name:"Brisbane"},
    { name:"Canberra"},
    { name:"Melbourne"},
    { name:"Perth"},
    { name:"Sydney"}
  ]

itemsArray:any=[
    {itemID: 1,icon: "assets/images/single-bed.png",name: "single bed",qty: 0},
    {itemID: 2,icon: "assets/images/drawer.png",name: "drawers",qty: 0},
    {itemID: 3,icon: "assets/images/oven.png",name: "microwave",qty: 0},

    {itemID: 4,icon: "assets/images/double-bed.png",name: "double bed",qty: 0},
    {itemID: 5,icon: "assets/images/tv.png",name: "TV (Plasmal/CD)",qty: 0},
    {itemID: 6,icon: "assets/images/stool.png",name: "stools",qty: 0},

    {itemID: 7,icon: "assets/images/queen-bed.png",name: "queen bed",qty: 0},
    {itemID: 8,icon: "assets/images/coffee-table.png",name: "coffee table",qty: 0},
    {itemID: 9,icon: "assets/images/dishwasher.png",name: "dishwasher",qty: 0},

    {itemID: 10,icon: "assets/images/king-bed.png",name: "king bed",qty: 0},
    {itemID: 11,icon: "assets/images/cabinate.png",name: "cabinet",qty: 0},
    {itemID: 12,icon: "assets/images/washing-machine.png",name: "washing machine",qty: 0},

    {itemID: 13,icon: "assets/images/beside-table.png",name: "bedside tables",qty: 0},
    {itemID: 14,icon: "assets/images/piano.png",name: "piano",qty: 0},
    {itemID: 15,icon: "assets/images/dryer.png",name: "clothes dryer",qty: 0},

    {itemID: 16,icon: "assets/images/dresser.png",name: "dresser",qty: 0},
    {itemID: 17,icon: "assets/images/fridge.png",name: "refrigertor",qty: 0},
    {itemID: 18,icon: "assets/images/toys.png",name: "toy box",qty: 0},


    {itemID: 19,icon: "assets/images/desk.png",name: "desk",qty: 0},
    {itemID: 20,icon: "assets/images/book-case.png",name: "bookcase",qty: 0},
    {itemID: 21,icon: "assets/images/chairs.png",name: "chairs",qty: 0},

    {itemID: 22,icon: "assets/images/mirrors.png",name: "mirrors",qty: 0},

    {itemID: 23,icon: "assets/images/single-seater.png",name: "single seater",qty: 0},
    {itemID: 24,icon: "assets/images/two-seater.png",name: "2 Seater",qty: 0},
    {itemID: 25,icon: "assets/images/three-seater.png",name: "3 Seater",qty: 0}

  ];
 
  inc(item){
    console.log(item);
    item.qty = item.qty+1;
  }
  dec(item){
    if(item.qty-1 < 1){
    item.qty = 0;
    }
    else{
    item.qty -= 1;
    }
}


}