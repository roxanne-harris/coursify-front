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

        this.http.get("http://localhost:3000/courses")
            .subscribe(
                result => {
                    callback(null, result.json());
                },

                err => {
                    console.log("Err: ", err);
                    callback(err, null);
                 
                }
            )

    }

    addCourseToService(course: Course) {

        this.http.post("http://localhost:3000/course/add", {
            subject: course.subject,
            number: course.number,
            title: course.title,
            description: course.description,
            university_id: course.university_id
        })
            .subscribe(
                result => {
                    console.log(result.json());
                },

                err => {
                    console.log(err);
                }
            )
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

    addCourseProfessorPair(
        course_id: number,
        professor_id: number
    ) {
        let url = "http://localhost:3000/course_professor";

        this.http.post(url, {
            course_id: course_id,
            professor_id: professor_id
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



}