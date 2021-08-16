import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-user-details',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent implements OnInit {

  type = 'contact-detail';
  items = [];

  constructor() { }

  ngOnInit(): void {
  }
  addCookie(val: any) {
    // @ts-ignore
    this.items.push(val);
  }

}
