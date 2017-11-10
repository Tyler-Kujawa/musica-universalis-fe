import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { Subject } from '../models/subject'


@Injectable()
export class SubjectService{
    private subjects:Subject[];

    constructor(){
        this.subjects = null;
    }

    getAllSubjects(): Subject[]{
        return null;
    }

    getSubjectsByTopic(topic:String): Subject[]{
       return null;
    }
}