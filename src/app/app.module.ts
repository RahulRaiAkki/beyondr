import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AmplifyAngularModule, AmplifyService} from "aws-amplify-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {AuthService} from "./utils/auth.service";
import {AppRoutingModule} from './app-routing.module';
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AmplifyAngularModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatListModule
  ],
  providers: [AmplifyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
