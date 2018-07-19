import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Professor } from "../models/professor";


@Injectable()
export class ProfessorService {

    constructor(
        public http: Http
    ) {

    }

    addProfessorToService(
        professorInfo: any,
        universityName: string
    ) {

        this.http.post("http://localhost:3000/professor", {
            first_name: professorInfo.first_name,
            last_name: professorInfo.last_name,
            universityName: universityName
        })
            .subscribe(
                result => {
                    //console.log(result.json());
                },

                err => {
                    console.log("Err: ", err);
                }
            )


    }

    getListOfProfessorsById(professor_id: number, callback: Function) {
        console.log(professor_id);

        let url = "http://localhost:3000/professorid/?professor_id=" + professor_id;
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

    getListOfProfessors(callback: Function) {
        this.http.get("http://localhost:3000/professors")
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

    getListOfProfessorsByUniversity(
        university_id: number,
        callback: Function
    ) {

        let url = "http://localhost:3000/professors/uni/?university_id=" + university_id.toString();

        this.http.get(url)
            .subscribe(
                result => {
                    // this.listOfProfessors = result.json();
                    console.log(result.json());

                    callback(null, result.json());
                },
                err => {
                    console.log("Err: ", err);
                    callback(err, null);
                }
            )

    }

}