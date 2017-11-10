import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import { Course } from '../models/course'

@Injectable()
export class CourseService{

    private courseUrl = "api/course";

    constructor(private http: Http){
    }

    // returns an Observable
    getUserCourse() {
        return this.http.get("api/course")
                        .map((response: Response) => response.json())
    }

    private handleError(error: Response | any){
        return Observable.throw("Something Happened");
    }
}