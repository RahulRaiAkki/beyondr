import {Component, OnInit, TemplateRef} from '@angular/core';
import {
  APIService,
  CreateUserDatabaseInput,
  CreateAllergiesInput,
  CreateReportInput,
  ReportType
} from "../../API.service";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../utils/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Auth} from "aws-amplify";
import { Storage } from 'aws-amplify';


@Component({
  selector: 'app-complete-user-details',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent implements OnInit {

  type = 'personal-detail';
  items = [];
  profileImage = ''
  createUserDatabaseInput = {} as CreateUserDatabaseInput;
  healthRecord = {} as CreateReportInput;

  allergies = {} as CreateAllergiesInput;

  constructor(public dialog: MatDialog, private api: APIService, private auth: AuthService, private snackBar: MatSnackBar,
              private router: Router) {
  }

  async ngOnInit() {
    try {
      Auth.currentAuthenticatedUser()
        .then(async user => {
          console.log(user)
        })
        .then(data => console.log('currentAuthenticatedUser d',data))
        .catch(err => console.log('currentAuthenticatedUser e',err));
      // .then(user => {
      //   console.log(user)
      // })
      // .then(data => console.log(data))
      // .catch(err => console.log(err));
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  addCookie(val: any) {
    // @ts-ignore
    this.items.push(val);
  }

  personalDetails() {
    this.type = 'contact-detail';
  }

  contactDetails() {
    this.type = 'health-record';
  }

  healthDetails() {
    this.type = 'personal-detail';
  }

  healthRecordDialog(healthDialog: TemplateRef<any>) {
    const dialogRef = this.dialog.open(healthDialog, {minWidth: '400px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  allergyDialog(allegyDialog: TemplateRef<any>) {
    const dialogRef = this.dialog.open(allegyDialog, {minWidth: '400px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async addHealthRecord() {
    try {
      this.healthRecord.userID = this.auth.userId;
      this.healthRecord.reoporttype = ReportType.DIGITAL;
      const res = await this.api.CreateReport(this.healthRecord);
      this.dialog.closeAll()
      console.log(res);
      this.snackBar.open("Data submitted successfully", '', {
        duration: 3000
      });
    } catch (error) {
      console.log('error in save userData', error);
    }
  }

  async addAllergy() {
    try {
      this.allergies.userid = this.auth.userId
      const res = await this.api.CreateAllergies(this.allergies);
      this.dialog.closeAll()
      console.log(res);
      this.snackBar.open("Data submitted successfully", '', {
        duration: 3000
      });
    } catch (error) {
      console.log('error in save userData', error);
    }
  }

  async onSelectFile(e: any) {
    const file: File = e.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const data = reader.result;
      this.profileImage = data as string;
    };
    reader.readAsDataURL(file);
    try {
      await Storage.put(this.auth.userId, file, {});
      this.snackBar.open("Image saved successfully", '', {
        duration: 3000
      });
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  async saveUserData() {
    try {
      this.createUserDatabaseInput.UserID = this.auth.userId
      const res = await this.api.CreateUserDatabase(this.createUserDatabaseInput);
      console.log(res);
      this.snackBar.open("Data submitted successfully", '', {
        duration: 3000
      });
      await this.router.navigateByUrl('auth/doc-coach-profile')
    } catch (error) {
      console.log('error in save userData', error);
    }
  }

}
