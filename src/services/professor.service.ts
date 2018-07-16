import { Professor } from "../models/professor";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { University } from "../models/university";

@Injectable()
export class ProfessorService {

    // private listOfProfessors: Professor[];

    constructor(
        public http: Http
    ) {
        // this.listOfProfessors = [];
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