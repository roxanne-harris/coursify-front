import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { University } from '../../models/university';
import { Professor } from '../../models/professor';
import { ProfessorService } from '../../services/professor.service';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

/**
 * Generated class for the UniversityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-university',
  templateUrl: 'university.html',
})
export class UniversityPage {

  public university: University;
  public professors: Professor[];
  public courses: Course[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public professorService: ProfessorService,
    public courseService: CourseService
  ) {

    this.university = this.navParams.get("universityParameter");
    this.professorService.getListOfProfessorsByUniversity(this.university.university_id, (err, result) => {
      if (err) {
        console.log(err);
      }

      this.professors = result; 
      console.log(this.professors);
    })

    this.courseService.getCoursesByUniversity(this.university.university_id, (err, result) => {
      if (err) {
        console.log(err);
      }

      this.courses = result;
    })
    
    // console.log(this.university);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniversityPage');
  }

  

}
