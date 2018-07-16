export class Review {

    reviewId: number;
    courseId: number;
    studentId: number;
    remark: string;
    rating: number;
    header: string;

    constructor(
        reviewId: number,
        courseId: number,
        studentId: number,
        remark: string,
        rating: number,
        header: string
    ) { 
        this.reviewId = reviewId;
        this.courseId = courseId;
        this.studentId = studentId;
        this.remark = remark;
        this.rating = rating;
        this.header = header;
    }
}