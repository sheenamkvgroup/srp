import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InsertService {
  constructor(private _http: HttpClient) { }

  insertApi(formdata){
    return this._http.post('https://aboveallmystery.com/angularPostData/insertForm.php',formdata)
  }
}
