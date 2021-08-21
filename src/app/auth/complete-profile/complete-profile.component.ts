import {Component, OnInit, TemplateRef} from '@angular/core';
import {APIService, CreateUserInput} from "../../API.service";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-complete-user-details',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent implements OnInit {

  type = 'health-record';
  items = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addCookie(val: any) {
    // @ts-ignore
    this.items.push(val);
  }

  personalDetails() {
  }

  contactDetails() {
  }

  healthDetails() {
  }

  addHealthRecords(healthDialog: TemplateRef<any>) {
    const dialogRef = this.dialog.open(healthDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
