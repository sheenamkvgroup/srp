import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {  
  isCollapsed = true;
  sessionValueName = sessionStorage.getItem("username");
  sessionValueEmail = sessionStorage.getItem("useremail");
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  logout():void {
    this.router.navigate(['/login']);
    localStorage.removeItem(sessionStorage.getItem("username"));  
    sessionStorage.clear();
    window.alert("You have been successfully logged out!");
  }
  




}
