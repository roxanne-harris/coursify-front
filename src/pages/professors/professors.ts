import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfessorService } from '../../services/professor.service';
import { ProfessorPage } from '../professor/professor';
import { Professor } from '../../models/professor';

/**
 * Generated class for the ProfessorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-professors',
  templateUrl: 'professors.html',
})
export class ProfessorsPage {

  listOfProfessors = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public professorService: ProfessorService
  ) {

    this.professorService.getListOfProfessors(
      (err, result) => {
        if (err) {
          console.log(err);
        }
        this.listOfProfessors = result;
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorsPage');
  }

  navigateToProfessor(professor: Professor) {
    this.navCtrl.push(ProfessorPage, {
      professorParameter: professor
    });
  }

}
