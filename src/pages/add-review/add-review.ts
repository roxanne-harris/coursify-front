import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CourseService } from '../../services/course.service';
import { Review } from '../../models/review';

/**
 * Generated class for the AddReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {

  reviewId: number;
  courseId: number;
  studentId: number;
  remark: string;
  rating: number;
  header: string;
  review: Review;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public courseService: CourseService
  ) {

    this.review = new Review(
      this.reviewId,
      this.courseId,
      this.studentId,
      this.remark,
      this.rating,
      this.header
    );
    
    this.courseId = this.navParams.get("reviewParameter").course_id;
    
  }

  addCourseReview() {
    this.review = new Review(
      this.reviewId,
      this.courseId,
      this.studentId,
      this.remark,
      this.rating,
      this.header
    );

    this.courseService.addCourseReview(this.review);
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReviewPage');
  }

}
