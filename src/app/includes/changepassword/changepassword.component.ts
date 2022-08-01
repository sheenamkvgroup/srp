import { Component, OnInit } from '@angular/core';
import { Changepassword } from './changepassword.model';
import { UpdatePasswordService } from '../../services/update-password.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changepassword = new Changepassword(); 
  newpassword:any;
  entries:any;
  error:any;
 // updatePasswordApi:object
  constructor(private set:UpdatePasswordService) { }

  ngOnInit(){}
  onSubmit(){ 
    var sessionValueEmail = sessionStorage.getItem("eml");   
    var newpassword = this.changepassword.newpassword;    
    var email = sessionValueEmail;
    console.log('Email-'+email); 
    console.log('pass-'+newpassword); 
   
    var fd = new FormData();
    fd.append('newpassword',newpassword);  
    fd.append('sessionValueEmail',email);
    this.set.updatePasswordApi(fd).subscribe((data) => { console.log(data),
      (error) => console.log(error)
  });  
  }
}