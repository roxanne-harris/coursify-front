import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';
import { CourseListPage } from '../course-list/course-list';
import { Http } from '@angular/http';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {

  public email: string;
  public password: string;
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
  
  }

  login() {

    // create/move into student.service.ts

    this.http.post(
      "http://localhost:3000/login_", {
        email: this.email,
        password: this.password
      })
      .subscribe(
        result => {
          console.log(result);

          var jwtResponse = result.json();
          var token = jwtResponse.token;

          localStorage.setItem("TOKEN", token);

          let t = localStorage.getItem("TOKEN");

          if (t != null) {
            this.navigateToCourseList();
          }
        },

        err => {
          console.log(err);
        }
      )


      // this.navigateToCourseList();

  }

  
  navigateToProfile() {
    this.navCtrl.setRoot(ProfilePage);
  }

  navigateToCourseList() {
    // this.navCtrl.setRoot(CourseListPage);
    this.navCtrl.setRoot(LandingPage);
  }

  navigateToRegistration() {
    this.navCtrl.setRoot(RegistrationPage);
  }


}