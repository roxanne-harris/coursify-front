import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UniversitiesPage } from '../universities/universities';
import { CourseListPage } from '../course-list/course-list';
import { ProfilePage } from '../profile/profile';
import { ProfessorsPage } from '../professors/professors';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  navigateToUniversities() {
    this.navCtrl.push(UniversitiesPage);
  }

  navigateToCourseList() {
    this.navCtrl.push(CourseListPage);
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  navigateToProfessors() {
    this.navCtrl.push(ProfessorsPage);
  }

}
