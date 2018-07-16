export class Professor {

    professor_id: number;
    university_id: number;
    first_name: string;
    last_name: string;

    constructor(
        professor_id: number,
        university_id: number,
        first_name: string,
        last_name: string

    ) { 
        this.professor_id = professor_id;
        this.university_id = university_id;
        this.first_name = first_name;
        this.last_name = last_name;
    }

}