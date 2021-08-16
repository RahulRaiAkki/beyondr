import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showVerifyOtp = false;
  constructor() { }

  ngOnInit(): void {
  }

  onOtpChange(otp: string | any[]) {
    console.log(otp)
    if (otp.length === 6) {
    }
  }

}
