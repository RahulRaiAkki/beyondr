import { Component, OnInit } from '@angular/core';
import {Auth} from "aws-amplify";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  userName = '';
  clickedType = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async signIn(): Promise<any> {
    try {
      // const user = await Auth.signIn(this.email, '12345678');
      const user = await Auth.signIn(this.email, this.password);
      this.userName = user.username;
      await this.router.navigate(['/app/home']);
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

}
