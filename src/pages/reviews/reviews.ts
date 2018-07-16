import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CourseService } from '../../services/course.service';

/**
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {

  public listOfReviews: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public courseService: CourseService
  ) {

    this.courseService.getCourseReviews(
      this.navParams.get("reviewParameter").course_id,
      (err, result) => {
        if(err) {
          console.log(err);
        }

        this.listOfReviews = result;
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');
  }



}
