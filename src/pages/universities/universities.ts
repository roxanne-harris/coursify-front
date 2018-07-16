import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { University } from '../../models/university'
import { UniversityService } from '../../services/university.service';
import { UniversityPage } from '../university/university';

/**
 * Generated class for the UniversitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-universities',
  templateUrl: 'universities.html',
})
export class UniversitiesPage {

  private listOfUniversities: Array<University>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public universityService: UniversityService
  ) {
    this.universityService.getListOfUniversities((err, result) => {
      if (err) {
        // err
      }

      this.listOfUniversities = result;
    }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniversitiesPage');
  }

  navigateToUniversity(university: University) {
    this.navCtrl.push(UniversityPage, {
      universityParameter: university
    });
  }

}
