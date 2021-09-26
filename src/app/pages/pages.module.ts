import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PagesComponent} from "./pages.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {PagesRoutingModule} from "./pages-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import { BookAppointmentComponent } from './home/book-appointment/book-appointment.component';
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCarouselModule} from "@ngmodule/material-carousel";



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    BookAppointmentComponent
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        RouterModule,
        PagesRoutingModule,
        MatGridListModule,
        MatInputModule,
        MatTabsModule,
        MatCarouselModule
    ]
})
export class PagesModule { }
