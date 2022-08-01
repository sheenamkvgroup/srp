import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  sessionValueEmail:any;
  params:any;
  HttpParams:any;
  constructor(private _http: HttpClient) {}

  checkLoginApi(formdata: FormData){   
    var sessionValueEmail = sessionStorage.getItem("eml");
    let params = new HttpParams({fromObject: {em: sessionValueEmail}});
    return this._http.get('https://www.cbdmovers.com.au/removalists/zoiac-online-booking/loginOnSite.php',{params});
  }

}
