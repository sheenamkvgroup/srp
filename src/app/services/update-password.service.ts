import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {
  constructor(private _http: HttpClient) {}
  sessionValueEmail:any; 
  baseUrl: string = 'https://www.cbdmovers.com.au/removalists/zoiac-online-booking/';
  
  updatePasswordApi(formdata: FormData){   
    // var sessionValueEmail = sessionStorage.getItem("eml");
    // let params = new HttpParams({fromObject: {em: sessionValueEmail}});
    return this._http.post(this.baseUrl+'newPassword.php',formdata);
  }
}
