import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from '../../services/reset-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpassword: any;
  loading: boolean;
  alertService: any;
   constructor(private router: Router,private resetPasswordService:ResetPasswordService) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    var formdata =new FormData();   
    formdata.append('email',this.resetpassword.email); 
    this.resetPasswordService.resetPasswordApi(formdata).subscribe((data)=>{        
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
