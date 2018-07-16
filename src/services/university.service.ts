import { University } from "../models/university";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class UniversityService {
    private listOfUniversities: Array<University>;

    constructor(
        public http: Http
    ) {
        this.listOfUniversities = [];
    }

    getListOfUniversities(callback: Function) {
        this.http.get("http://localhost:3000/universities")
            .subscribe(
                result => {
                    this.listOfUniversities = result.json();

                    callback(null, result.json());
                },

                err => {
                    console.log("Err: ", err);
                    callback(err, null);
                }
            )
    }

    findUniversityByName(
        name: string,
        callback: Function
    ) {
        let url = "http://localhost:3000/university/?name=" + name;
        // console.log(url);
        this.http.get(url)
        .subscribe(
            result => {
                console.log(result.json());
                callback(null, result.json())
            },
            err => {
                callback(err, null);
            }
        )
    }
}