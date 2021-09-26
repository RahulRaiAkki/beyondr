import {Component, OnInit, TemplateRef} from '@angular/core';
import { Storage } from 'aws-amplify';
import {
  APIService,
  Certificates, CreateCertificatesInput, CreateDoctorInput,
  CreateEducationInput,
  CreateExperienceInput,
  Doctor, DoctorProfileReview, DoctorType,
  Education
} from "../../API.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../utils/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-doctor-coach-profile',
  templateUrl: './doctor-coach-profile.component.html',
  styleUrls: ['./doctor-coach-profile.component.css']
})
export class DoctorCoachProfileComponent implements OnInit {
  slides = [

    {'image': './assets/images/doc-slider1.png'},

    {'image': './assets/images/doc-slider2.png'},

    {'image': './assets/images/doc-slider3.png'},
  ];
  fileName = ''

  coachSpecialization = ['Dietician and Nutrition','Mental Wellness','Physical Wellness'];
  doctorSpecialization = ['Urology','Dentist','Allergy and immunology','Anesthesiology','Dermatology','Diagnostic radiology','Emergency medicine','Family medicine','Internal medicine','Medical genetics','Neurology','Nuclear medicine','Obstetrics and gynecology','Ophthalmology','Pathology','Pediatrics','Physical medicine and rehabilitation','Preventive medicine','Psychiatry','Radiation oncology','Surgery'];
  doctorCoach = {} as CreateDoctorInput;
  doctorCoachEducation = {} as CreateEducationInput;
  doctorCoachExperience = {} as CreateExperienceInput;
  doctorCoachCertificate = {} as CreateCertificatesInput;
  localCertificates = [];
  localExperiences: any = [];
  localEducations:any = [];

  currentWorking = false;
  completed = false;

  count = 3;
  type = '';
  clickedOn = 'Personal Details';
  showScreen = false;
  profileImage =''
  certificates = [];
  constructor(public dialog: MatDialog, private auth: AuthService, private api: APIService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  educations(educationDialog: TemplateRef<any>) {
    const dialogRef = this.dialog.open(educationDialog,{width: '400px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  experiences(experienceDialog: TemplateRef<any>) {
    const dialogRef = this.dialog.open(experienceDialog,{width: '400px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  certificatesDialog(certificatesDialog: TemplateRef<any>) {
    const dialogRef = this.dialog.open(certificatesDialog,{width: '400px'});

    dialogRef.afterClosed().subscribe(result => {
      this.fileName = '';
      this.profileImage = '';
    });
  }
  async addEducation() {
    try {
      this.doctorCoachEducation.doctorID = this.auth.userId;
      this.doctorCoachEducation.enddate = this.currentWorking ? 'Present' : this.doctorCoachEducation.enddate;
      this.doctorCoachEducation.doctortype = this.type === 'Doctor' ? DoctorType.DOCTOR: DoctorType.COACH
      const res = await this.api.CreateEducation(this.doctorCoachEducation);
      this.dialog.closeAll();
      console.log(res);
      this.localEducations.push(this.doctorCoachEducation);
      this.snackBar.open("Data submitted successfully", '', {
        duration: 3000
      });
    } catch (error) {
      console.log('error in save Education', error);
    }
  }
  async addCertificates() {
    try {
      this.doctorCoachCertificate.doctorID = this.auth.userId;
      // @ts-ignore
      this.doctorCoachCertificate.doctortype = this.type === 'Doctor' ? DoctorType.DOCTOR: DoctorType.COACH;
      const res = await this.api.CreateCertificates(this.doctorCoachCertificate);
      this.dialog.closeAll();
      console.log(res);
      this.snackBar.open("Data submitted successfully", '', {
        duration: 3000
      });
    } catch (error) {
      console.log('error in save certificate', error);
    }
  }
  async addExperience() {
    try {
      this.doctorCoachExperience.doctorID = this.auth.userId;
      this.doctorCoachExperience.enddate = this.currentWorking ? 'Present' : this.doctorCoachExperience.enddate;
      // @ts-ignore
      this.doctorCoachExperience.doctortype = this.type === 'Doctor' ? DoctorType.DOCTOR: DoctorType.COACH;
      const res = await this.api.CreateExperience(this.doctorCoachExperience);
      this.dialog.closeAll();
      console.log(res);
      this.localExperiences.push(this.doctorCoachExperience);
      this.snackBar.open("Data submitted successfully", '', {
        duration: 3000
      });
    } catch (error) {
      console.log('error in saving Experience', error);
    }
  }
  onSelectFile(event: any) {
    if (event.target.files && event.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // @ts-ignore
        this.profileImage = event.target.result;
      }
    }
  }
  // @ts-ignore
  async fileUpload(e): Promise<any> {

    const file: File = e.files[0];
    this.fileName = file.name;
    const reader = new FileReader();
    reader.onloadend = () => {
      const data = reader.result;
      this.profileImage = data as string;
    };
    reader.readAsDataURL(file);

    //save certificate in local

    const uuid = this.getUniqueId(4);
    try {
      const uploadedFile = await Storage.put(uuid, file, {
      });
      this.doctorCoachCertificate.imageurl = uuid
      // @ts-ignore
      this.localCertificates.push(file.name);

      this.snackBar.open("File uploaded successfully", '', {
        duration: 3000
      });

    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }
  getUniqueId(parts: number): string {
    const stringArr = [];
    for(let i = 0; i< parts; i++){
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
  async saveDoctorCoach(){
    try {
      this.doctorCoach.UserID = this.auth.userId;
      this.doctorCoach.doctortype = this.type === 'Doctor' ? DoctorType.DOCTOR: DoctorType.COACH;
      this.doctorCoach.status = DoctorProfileReview.SUBMITTED;
      this.doctorCoach.paycut = '';
      this.doctorCoach.appointmentscompleted = '';
      this.doctorCoach.viewsonprofile = '';
      const res = await this.api.CreateDoctor(this.doctorCoach);
      this.dialog.closeAll();
      console.log(res);
      this.snackBar.open("Data submitted successfully", '', {
        duration: 3000
      });
      this.completed = true;
    } catch (error) {
      console.log('error in saving doctorCoach', error);
    }
  }
}


