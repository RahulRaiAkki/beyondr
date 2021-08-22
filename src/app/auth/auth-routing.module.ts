import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PreLoginComponent} from "./pre-login/pre-login.component";
import {CompleteProfileComponent} from "./complete-profile/complete-profile.component";
import {DoctorCoachProfileComponent} from "./doctor-coach-profile/doctor-coach-profile.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login-home',
    component: PreLoginComponent,
  },
  {
    path: 'complete-profile',
    component: CompleteProfileComponent,
  },
  {
    path: 'doc-coach-profile',
    component: DoctorCoachProfileComponent,
  },
  {path: '', redirectTo: 'login-home', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
