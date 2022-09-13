import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private _http: HttpClient) { }
  sessionValueEmail:any; 
  baseUrl: string = 'https://www.cbdmovers.com.au/removalists/zoiac-online-booking/';
  
  resetPasswordApi(formdata: FormData){
    return this._http.post(this.baseUrl+'resetPassword.php',formdata);
  }
}

