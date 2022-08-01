import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  ProfileService() {
    throw new Error('Method not implemented.');
  }
  sessionValueEmail:any;
  params:any;
  HttpParams:any;
  constructor(private _http: HttpClient) { }

  getProfileData(){    
    var sessionValueEmail = sessionStorage.getItem("useremail");
    let params = new HttpParams({fromObject: {em: sessionValueEmail}});
    return this._http.get('https://www.cbdmovers.com.au/removalists/zoiac-online-booking/getProfileData.php',{params});
  }
}