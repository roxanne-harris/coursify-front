import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { AddCoursePage } from '../add-course/add-course';
import { CoursePage } from '../course/course';
import { ProfilePage } from '../profile/profile';
import { MyCoursesPage } from '../my-courses/my-courses';

/**
 * Generated class for the CourseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-course-list',
  templateUrl: 'course-list.html',
})

/** 
 * Figure out how to auto-reload/refresh this page so the data updates!
*/
export class CourseListPage {

  public listOfCourses: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public courseService: CourseService
  ) {
    this.listOfCourses = [];

    courseService.getListOfCourses((err, results) => {
      if (err) {
        // error
      }

      this.listOfCourses = results;
    });

    // if (courseService.getListOfCourses() != null) {
    //     this.listOfCourses = courseService.getListOfCourses();
    // }
    
    //console.log(courseService.getListOfCourses());
    //console.log(this.listOfCourses);
  }

  // saveCourse(course: Course) {
  //   this.courseService.addCourseToService(course);
  // }

  navigateToCourse(course: Course) {
    this.navCtrl.push(CoursePage, {
      courseParameter: course
    });
  }

  navigateToMyCourses() {
    this.navCtrl.push(MyCoursesPage);
  }

  navigateToAddCourse() {
    this.navCtrl.push(AddCoursePage);
    //console.log(this.listOfCourses);
    //console.log(this.http.get("http://localhost:3000/courses"));
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseListPage');
    this.courseService.getListOfCourses((err, results) => {
      if (err) {
        // error
      }

      this.listOfCourses = results;
    });
  }

  ionViewDidEnter() {
    this.courseService.getListOfCourses((err, results) => {
      if (err) {
        // error
      }

      this.listOfCourses = results;
    });
  }

}
