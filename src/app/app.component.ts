import {Component, OnInit} from '@angular/core';
import { API } from 'aws-amplify';
import {APIService} from "./API.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beyondr';
  constructor(private api: APIService) {
  }
  async ngOnInit() {
    try {
      let createUserMutation = await this.api.CreateUser({awsdate: "", email: "test@gmail.com", name: "Rahul", userid: "aaaa"});
      console.log(createUserMutation);
    } catch (error) {
      console.log("Error retrieving", error);
    }
  }
}
