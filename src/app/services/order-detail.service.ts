import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

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
  path:any;
  constructor(private _http: HttpClient,private router: Router) { 
   
  }
 
  getOrderDetail(){       
    var url = this.router.url;
    var path = url.split('QOB').pop();
    console.log('qutid-'+path);
   
    let params = new HttpParams({fromObject: {id: path}});
    return this._http.get('https://www.cbdmovers.com.au/removalists/zoiac-online-booking/getOrderDetails.php',{params});
  }
}