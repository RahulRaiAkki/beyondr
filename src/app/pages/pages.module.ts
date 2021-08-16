import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PagesComponent} from "./pages.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {PagesRoutingModule} from "./pages-routing.module";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    RouterModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
