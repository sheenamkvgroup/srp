import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchHistoryService { 
  sessionValueEmail:any;
  params:any;
  HttpParams:any;
  constructor(private _http: HttpClient) {}
 
  getHistoryData(){    
    var sessionValueEmail = sessionStorage.getItem("useremail");
    let params = new HttpParams({fromObject: {em: sessionValueEmail}});
    return this._http.get('https://www.cbdmovers.com.au/removalists/zoiac-online-booking/getHistoryData.php',{params});
  }
}