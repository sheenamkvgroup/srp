import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showHead: boolean = false; 
    constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/logout') {
            this.showHead = true;
          } else {
            this.showHead = false;
          }
        }
      });   

    }
  }
