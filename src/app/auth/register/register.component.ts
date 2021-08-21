import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {APIService, CreateUserInput} from "../../API.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showVerifyOtp = false;
  otp: any;
  password: any;
  confirmPassword: any;

  createUser = {} as CreateUserInput;
  constructor(private api: APIService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  async signUp(): Promise<any>{
    try {
      if(this.confirmPassword === this.password){
        const { user } = await Auth.signUp({
          username: this.createUser.email,
          password: this.password,
        });
        this.showVerifyOtp = true
      } else{
        // password not matched
        // @ts-ignore
        this.snackBar.open("Password didn't matched", '', {
          duration: 5000
        });
      }
    } catch (error) {
      console.log('error signing up:', error);
      this.snackBar.open(error.message, '', {
        duration: 5000
      });
    }
  }

  onOtpChange(otp: string | any[]) {
    console.log(otp)
    if (otp.length === 6) {
    }
  }

  async confirmOtp(): Promise<any>{
    try {
      const { user } = await Auth.confirmSignUp(this.createUser.email, this.otp);
      console.log(user);
      Auth.currentAuthenticatedUser()
        .then(async user => {
          console.log(user.username);
          if(user.username){
            this.showVerifyOtp = false;
            await this.create(user.username)
            this.snackBar.open("Sign up successful", '', {
              duration: 5000
            });
          }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
      // .then(user => {
      //   console.log(user)
      // })
      // .then(data => console.log(data))
      // .catch(err => console.log(err));
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async create(userId: any): Promise<any>{
    try {
      this.api.CreateUserDatabase({UserID: userId})
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async resendConfirmationCode(): Promise<any> {
    try {
      await Auth.resendSignUp(this.createUser.email);
      console.log('code resent successfully');
      this.snackBar.open("code resent successfully", '', {
        duration: 5000
      });
    } catch (err) {
      console.log('error resending code: ', err);
      this.snackBar.open("error resending code", '', {
        duration: 5000
      });
    }
  }

}
