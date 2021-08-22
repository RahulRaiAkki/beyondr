import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from "@angular/material/radio";
import { PreLoginComponent } from './pre-login/pre-login.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import {NgOtpInputModule} from "ng-otp-input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import { DoctorCoachProfileComponent } from './doctor-coach-profile/doctor-coach-profile.component';
import {MatCarouselModule} from "@ngmodule/material-carousel";


@NgModule({
  declarations: [LoginComponent, RegisterComponent, PreLoginComponent, CompleteProfileComponent, DoctorCoachProfileComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatRadioModule,
        NgOtpInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonToggleModule,
        MatListModule,
        MatDialogModule,
        MatCarouselModule,
    ]
})
export class AuthModule { }
