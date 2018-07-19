import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Professor } from '../../models/professor';
import { CourseService } from '../../services/course.service';

/**
 * Generated class for the ProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-professor',
  templateUrl: 'professor.html',
})
export class ProfessorPage {

  professor: Professor;
  courses = [];
  listOfCourses = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public courseService: CourseService
  ) {

    this.professor = this.navParams.get("professorParameter");

    this.courseService.getCourseProfessors(
      this.professor.professor_id,
      (err, result) => {
        if(err) {

        }
        this.courses = result;
        console.log(result);
      }
    )
  }

  viewCourses(id) {

    this.listOfCourses = [];
    
      this.courseService.getCourseById(
        id,
        (err, result) => {
        if(err) {

        }
        console.log(result);
        this.listOfCourses.push(result);
      }
    )
      
  }

  getProfessors() {
    console.log(this.courses);
    this.courses.forEach(value => {
      this.viewCourses(value.course_id);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorPage');
  }

}
