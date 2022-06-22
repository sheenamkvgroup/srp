import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { InsertService } from '../../services/insert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  step: any = 1;
  home = new Home();
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
      fd.append("date",this.home.date);
      this.ins.insertApi(fd).subscribe((data)=>{
        console.log(data);
      });
     
    }
  
    previous() {
      this.step = this.step - 1;
    }
    
}
