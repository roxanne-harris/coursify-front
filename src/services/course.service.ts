import { Course } from "../models/course";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Review } from "../models/review";
import { Professor } from "../models/professor";


@Injectable()
export class CourseService {

    
    // private savedCourses: Array<Course>;

    constructor(
        public http: Http
    ) {
        
        // this.savedCourses = [];
    }

    getCourseProfessors(course_id: number, callback: Function) {
        let url = "http://localhost:3000/courseprofessors/?course_id=" + course_id;

        this.http.get(url)
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

    getCourseProfessors2(professor_id: number, callback: Function) {
        let url = "http://localhost:3000/courseprofessors2/?professor_id=" + professor_id;

        this.http.get(url)
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

    addCourseToService(course: Course, universityName: string) {

        this.http.post("http://localhost:3000/course/add", {
            subject: course.subject,
            number: course.number,
            title: course.title,
            description: course.description,
            universityName: universityName
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
        course: Course,
        professor: Professor
    ) {
        let url = "http://localhost:3000/course_professor";

        this.http.post(url, {
            first_name: professor.first_name,
            last_name: professor.last_name,
            subject: course.subject,
            number: course.number
        })
            .subscribe(
                result => {
                    // console.log(result.json())
                },
                err => {
                    console.log(err);
                }
            )
    }

    getCourseById(
        course_id: number,
        callback: Function
    ) {
        let url = "http://localhost:3000/course/id/?course_id=" + course_id;
        
        this.http.get(url)
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



}