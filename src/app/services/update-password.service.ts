import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UpdatePasswordService {
  constructor(private _http: HttpClient) {}
 
  updatePasswordApi(formdata: FormData){   
    console.log(formdata);
    return this._http.post('https://www.cbdmovers.com.au/removalists/zoiac-online-booking/newPassword.php',{formdata});
  }
}
