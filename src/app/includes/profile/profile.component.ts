import { Component, OnInit } from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile = new Profile(); 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() { 
    console.log(this.profile);
  }
}
