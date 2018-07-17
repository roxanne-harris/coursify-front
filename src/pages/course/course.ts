import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Course } from '../../models/course';
import { AddReviewPage } from '../add-review/add-review';
import { ReviewsPage } from '../reviews/reviews';

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
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.course = this.navParams.get("courseParameter");
      
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
