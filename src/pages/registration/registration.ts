import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import { Student } from '../../models/student';


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})


export class RegistrationPage {

  public studentId;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public confirmPassword: string;

  public student: Student;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {}

  register() {

    // Check if password matches confirm password field
    // if (this.password != this.confirmPassword) {
    //   console.error("Password does not match");
    //   return ;
    // }

    
    // console.log(this.email);
    // console.log(this.password);
    this.http.post(
      "http://localhost:3000/register", {
        first_name: this.firstName,
        last_name: this.lastName,
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
              this.navigateToLogin();
          }
        },

        err => {
          console.log(err);
        }

      )

    // this.navigateToProfile();
  }

  navigateToProfile() {
    console.log("Profiling...");

    // this.navCtrl.push(ProfilePage);
    this.navCtrl.setRoot(ProfilePage);
  }

  navigateToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}


/*

*/
