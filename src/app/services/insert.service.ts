import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InsertService {
  constructor(private _http: HttpClient) { }

  insertApi(formdata: FormData){
    return this._http.post('https://www.cbdmovers.com.au/removalists/zoiac-online-booking/requestData.php',formdata)
  }
}
