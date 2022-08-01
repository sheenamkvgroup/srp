import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  OrderDetailService() {
    throw new Error('Method not implemented.');
  }
  sessionValueEmail:any;
  params:any;
  HttpParams:any;
  constructor(private _http: HttpClient) { 
    
  }
 
  getOrderDetail(){    
    var id = '1';
    let params = new HttpParams({fromObject: {id: id}});
    return this._http.get('https://www.cbdmovers.com.au/removalists/zoiac-online-booking/getOrderDetails.php',{params});
  }
}