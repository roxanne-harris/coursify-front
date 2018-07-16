import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseListPage } from '../course-list/course-list';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToCourseList() {
    this.navCtrl.setRoot(CourseListPage);
  }

  navigateToRegistration() {
    this.navCtrl.setRoot(RegistrationPage); 
  }

  navigateToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
