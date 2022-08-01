import { Component, OnInit } from '@angular/core';
import { Profile } from './profile.model';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  getProfileData: Object;
  strIntoObj: ProfileComponent[];
  Name:string;
  Email:string;
  Mobile:string;
  City:string;
  ngOnInit(): void {
  }

 
  title = 'profile';
  profile = new Profile(); 
  sessionValueEmail:any;
  data:any;
  myObject:any; 
  constructor(private getData:ProfileService) {    
      var sessionValueEmail = sessionStorage.getItem("eml");
      getData.getProfileData().subscribe((data)=>{
      console.log("ProfileDataResponse"+data);      
      console.log("profile email"+sessionValueEmail);
     
      var myObject = JSON.stringify(data);      
      console.log("stringfyData-"+myObject );   
      var str = myObject; // your response in a string
      this.strIntoObj = JSON.parse(str);
     // var parsed = JSON.parse(str);
      var user = this.strIntoObj[0];   
      var Name = user.Name; 
      console.log(this.strIntoObj);  
        
    });
  }
}
