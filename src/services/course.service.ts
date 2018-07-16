import { Course } from "../models/course";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Review } from "../models/review";


@Injectable()
export class CourseService {

    private listOfCourses: Array<Course>;
    // private savedCourses: Array<Course>;

    constructor(
        public http: Http
    ) {
        this.listOfCourses = [];
        // this.savedCourses = [];
    }

    getListOfCourses(callback: Function) {
        // const headers: Headers = new Headers()
        // headers.append("accept","/*")

        // const options = new RequestOptions({headers: headers})
        // return this.listOfCourses;

        this.http.get("http://localhost:3000/courses")
            .subscribe(
                result => {
                    this.listOfCourses = result.json();
                    // console.log(result);
                    // console.log(result.json)
                    // console.log(result.json());

                    callback(null, result.json());

                    // this.listOfCourses = result.json();
                    // return this.listOfCourses;

                },

                err => {
                    console.log("Err: ", err);
                    callback(err, null);
                    // return this.listOfCourses;
                }
            )

        // console.log(this.listOfCourses);

    }

    addCourseToService(course: Course) {
        // console.log(this.http.get("http://localhost:3000/courses").toPromise);
        // this.http.post(
        //     "http://localhost:3000/addCourse",
        //     {
        //         course: course
        //     }
        // )

        // console.log(course);

        this.http.post("http://localhost:3000/course/add", {
            subject: course.subject,
            number: course.number,
            title: course.title,
            description: course.description,
            university_id: course.university_id
        })
            .subscribe(
                result => {
                    // console.log(result.json());
                    //this.listOfCourses.push(course);
                },

                err => {
                    console.log(err);
                }
            )
        this.listOfCourses.push(course);

    }

    getCoursesByUniversity(
        university_id: number,
        callback: Function
    ) {

        let url = "http://localhost:3000/course/uni/?university_id=" + university_id.toString();

        this.http.get(url)
            .subscribe(
                result => {
                    callback(null, result.json());
                },
                err => {
                    callback(err, null);
                }
            )
    }

    addCourseReview(review: Review) {

        let url = "http://localhost:3000/course/review";

        this.http.post(url, {
            course_id: review.courseId,
            student_id: review.studentId,
            remark: review.remark,
            rating: review.rating,
            header: review.header
        })
            .subscribe(
                result => {
                    console.log(result.json())
                },
                err => {
                    console.log(err);
                }
            )
    }

    getCourseReviews(
        course_id: number,
        callback: Function
    ) {
        let url = "http://localhost:3000/course/reviews/?course_id=" + course_id.toString();

        this.http.get(url)
        .subscribe(
            result => {
                callback(null, result.json());
            },

            err => {
                callback(err, null);
            }

        )
    }

}