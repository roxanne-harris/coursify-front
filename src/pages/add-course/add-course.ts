import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { CourseListPage } from '../course-list/course-list';
import { UniversityService } from '../../services/university.service';

/**
 * Generated class for the AddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html',
})
export class AddCoursePage {

  public addedCourse: Course;
  course_id: number = 0;
  subject: string;
  number: number;
  title: string;
  description: string;
  university_id: number;
  universityName: string;
 
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public courseService: CourseService,
    public universityService: UniversityService
  ) {

  }

  addCourseToList() {
    // console.log(this.universityName);
    //console.log(this.courseCode);
    this.universityService.findUniversityByName(
      this.universityName,
      (err, result) => {
        if(err) {
          console.log(err);
        }
        this.university_id = result.university_id;
        // console.log(this.university_id);
        this.addedCourse = new Course(
          this.course_id,
          this.subject,
          this.number,
          this.title,
          this.description,
          this.university_id
        );
  
        this.courseService.addCourseToService(this.addedCourse);
        this.navCtrl.setRoot(CourseListPage);
      
      }
    )
      


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoursePage');
  }

}
