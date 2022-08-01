import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
import { Router,Navigation} from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = new Login();     
  sessionValue: any;
  sessionValueName: string;
  sessionValuePassword: string;
  email:any;
  name:any;
  password:any; 
  myemail:any;   
  mypass:any;
  data:any; 
  checkLoginApi: Object;
    
  constructor(private router: Router,private getData:LoginService) {}
 
  ngOnInit(): void {
  }

  onSubmit(){  
  
    //SESSION SET  
    sessionStorage.setItem("eml",this.login.email);
    sessionStorage.setItem("psw",this.login.password);
       var sessionValuePassword = sessionStorage.getItem("psw");
       var sessionValueEmail = sessionStorage.getItem("eml");
       
       var formData = new FormData();
       console.debug(sessionValueEmail+'---'+sessionValuePassword);       
       formData.append('email',sessionValueEmail);  
       formData.append('password',sessionValuePassword);       
    
       this.getData.checkLoginApi(formData).subscribe((data)=>{ 
        
          var myObject = JSON.stringify(data);
          console.log("stringfyData-"+myObject);   
          var str = myObject; // your response in a string
          var parsed = JSON.parse(str);
          var user = parsed[0];   
          console.log(user.name);  
          console.log(user.email); 
          console.log(user.password);
          
        if(this.login.email == user.email && this.login.password == user.password){     
          sessionStorage.setItem("username",user.name);
          var sessionValueName = sessionStorage.getItem("username");
          sessionStorage.setItem("useremail",user.email);
          var sessionValueEmail = sessionStorage.getItem("useremail");
          this.router.navigateByUrl('/');
          console.log('Session-'+sessionValueName);
        }else {
          alert("Invalid credentials, Try again!");
        } 
    });  
  }
}