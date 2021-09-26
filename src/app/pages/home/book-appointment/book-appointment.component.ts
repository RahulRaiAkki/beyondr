import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  count = 3;
  slides = [

    {'image': './assets/images/doc-slider1.png'},

    {'image': './assets/images/doc-slider2.png'},

    {'image': './assets/images/doc-slider3.png'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  dateClicked(date: any): void{
    console.log(date);
  }

}
