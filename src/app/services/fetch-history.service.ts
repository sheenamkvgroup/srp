import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchHistoryService { 
  sessionValueEmail:any;
  constructor(private _http: HttpClient) {}


  getHistoryData(){    
    var sessionValueEmail = sessionStorage.getItem("useremail");
    return this._http.get('https://www.cbdmovers.com.au/removalists/zoiac-online-booking/getHistoryData.php?em=',
    this.sessionValueEmail);
  }
}