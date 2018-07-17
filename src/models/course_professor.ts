export class CourseProfessor {
    cp_id: number;
    course_id: number;
    professor_id: number;

    constructor(
        cp_id: number,
        course_id: number,
        professor_id: number
    ) {
        this.cp_id = cp_id;
        this.course_id = course_id;
        this.professor_id = professor_id;
    }
}