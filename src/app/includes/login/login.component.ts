import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = new Login(); 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log(this.login);
  }

}
