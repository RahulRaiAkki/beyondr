import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AmplifyAngularModule, AmplifyService} from "aws-amplify-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AmplifyAngularModule,
        FormsModule
    ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
