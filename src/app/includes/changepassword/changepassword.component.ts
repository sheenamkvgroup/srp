import { Component, OnInit } from '@angular/core';
import { Changepassword } from './changepassword.model';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changepassword = new Changepassword(); 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() { 
    console.log(this.changepassword);
  }
}
