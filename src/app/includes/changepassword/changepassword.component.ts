import { Component, OnInit } from '@angular/core';
import { Changepassword } from './changepassword.model';
import { UpdatePasswordService } from '../../services/update-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changepassword = new Changepassword(); 
  newpassword:any;
  alertService: any;
  loading: boolean;
  constructor(private router: Router,private updatepasswordservice:UpdatePasswordService) {}

  ngOnInit(){}

  onSubmit() { 
           
    var sessionValueEmail = sessionStorage.getItem("eml");
    var formdata =new FormData();   
    formdata.append('newpassword',this.changepassword.newpassword);  
    formdata.append('sessionValueEmail',sessionValueEmail);
    this.updatepasswordservice.updatePasswordApi(formdata).subscribe((data)=>{        
    console.log(data);
    this.router.navigateByUrl('/');
  },
    error => {
        // failed so display error
        this.alertService.error(error);
        this.loading = false;
                });   
  }  
}