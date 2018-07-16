

export class Student {

    studentId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    paid: boolean;
    university_id: string;


    constructor(
        studentId: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        paid: boolean,
        university_id: string
    ) {

        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.paid = paid;
        this.university_id = university_id;


    }



}
