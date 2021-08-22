import { Component, OnInit } from '@angular/core';
import {Amplify, Auth} from 'aws-amplify';
import {APIService, CreateUserInput} from "../../API.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../utils/auth.service";
import {Router} from "@angular/router";


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
  userId: any;
  constructor(private api: APIService, private snackBar: MatSnackBar, private auth: AuthService, private router: Router) {
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
        console.log('user',user)
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
    this.otp= otp;
  }

  async confirmOtp(): Promise<any>{
    try {
      await Auth.confirmSignUp(this.createUser.email, this.otp);
      await this.signIn();
      // await this.create()
      // Auth.currentAuthenticatedUser()
      //   .then(async user => {
      //     console.log(user.username);
      //     if(user.username){
      //       this.showVerifyOtp = false;
      //       await this.create(user.username)
      //       this.snackBar.open("Sign up successful", '', {
      //         duration: 5000
      //       });
      //     }
      //   })
      //   .then(data => console.log(data))
      //   .catch(err => console.log(err));
      // .then(user => {
      //   console.log(user)
      // })
      // .then(data => console.log(data))
      // .catch(err => console.log(err));
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async create(): Promise<any>{
    try {
      // Auth.currentAuthenticatedUser()
      //   .then(async user => {
      //     console.log(user.username);
      //     if(user.username){
      //       this.showVerifyOtp = false;
      //       this.userId = user.username
      //       await this.api.CreateUserDatabase({UserID: this.userId})
      //       this.snackBar.open("Sign up successful", '', {
      //         duration: 5000
      //       });
      //     }
      //   })
      //   .then(data => console.log(data))
      //   .catch(err => console.log(err));
      // .then(user => {
      //   console.log(user)
      // })
      // .then(data => console.log(data))
      // .catch(err => console.log(err));

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

  async signIn(): Promise<any> {
    try {
      const user = await Auth.signIn(this.createUser.email, this.password);
      this.auth.userId = user.username;
      this.snackBar.open("Data submitted successfully", '', {
        duration: 5000
      });
      await this.router.navigateByUrl('auth/complete-profile')
    } catch (error) {
      console.log('error signing in', error);
    }
  }

}
