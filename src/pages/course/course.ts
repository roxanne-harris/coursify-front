import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Course } from '../../models/course';
import { AddReviewPage } from '../add-review/add-review';
import { ReviewsPage } from '../reviews/reviews';
import { CourseService } from '../../services/course.service';
import { ProfessorService } from '../../services/professor.service';

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  public course: Course;
  public professors = [];
  public listOfProfessors = [];
  ids = [];
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public courseService: CourseService,
    public professorService: ProfessorService
  ) {

      this.course = this.navParams.get("courseParameter");
      this.courseService.getCourseProfessors(
        this.course.course_id,
        (err, result) => {
          if(err) {

          }
          this.professors = result;
          console.log(result);
        }
      )

      this.listOfProfessors = [];

      
      
  }

  

  viewProfessors(id) {

    this.listOfProfessors = [];
    
      this.professorService.getListOfProfessorsById(
        id,
        (err, result) => {
        if(err) {

        }
        console.log(result);
        this.listOfProfessors.push(result);
      }
    )
      
  }

  getProfessors() {
    console.log(this.professors);
    this.professors.forEach(value => {
      this.viewProfessors(value.professor_id);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }

  navigateToAddReview() {
    this.navCtrl.push(AddReviewPage, {
      reviewParameter: this.course
    });
  }

  navigateToReviews() {
    this.navCtrl.push(ReviewsPage, {
      reviewParameter: this.course
    });
  }

}
