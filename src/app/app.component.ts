import {Component, OnInit} from '@angular/core';
import { API } from 'aws-amplify';
import {APIService} from "./API.service";
import { Auth } from 'aws-amplify';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beyondr';
  otp: any;
  constructor(private api: APIService) {
  }
  async ngOnInit() {

    // try {
    //   let createUserMutation = await this.api.CreateUser({awsdate: new Date().toDateString(), email: "test@gmail.com", name: "Rahul", userid: "aaaa"});
    //   console.log(createUserMutation);
    // } catch (error) {
    //   console.log("Error retrieving", error);
    // }
  }
  async signUp(): Promise<any>{
    try {
      const { user } = await Auth.signUp({
        username: 'rk507922@gmail.com',
        password: '12345678978',
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async confirmSignUp(): Promise<any>{
    try {
      const { user } = await Auth.confirmSignUp('rk507922@gmail.com', this.otp);
      console.log(user);
      Auth.currentUserPoolUser()
        .then(user => {
          console.log(user)
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async create(): Promise<any>{
    try {
      this.api.CreateUserDatabase({UserID: ""})
      await Auth.confirmSignUp('rk507922@gmail.com', this.otp);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
  async resendConfirmationCode(): Promise<any> {
    try {
      await Auth.resendSignUp('rk507922@gmail.com');
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }


}


