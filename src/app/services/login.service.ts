import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  HttpParams:any;
  constructor(private _http: HttpClient) {}
  
  checkLogin(){    
    var sessionValueEmail = sessionStorage.getItem("useremail");
    let params = new HttpParams({fromObject: {em: sessionValueEmail}});
    return this._http.get('https://www.cbdmovers.com.au/removalists/zoiac-online-booking/checkLoginData.php',{params});
  }

}
