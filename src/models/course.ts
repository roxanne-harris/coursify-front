export class Course {

    course_id: number;
    subject: string;
    number: number;
    title: string;
    description: string;
    university_id: number;


    constructor(
        course_id: number,
        subject: string,
        number: number,
        title: string,
        description: string,
        university_id: number
    ) {

        this.course_id = course_id;
        this.subject = subject;
        this.number = number;
        this.title = title;
        this.description = description;
        this.university_id = university_id;

    }

}
