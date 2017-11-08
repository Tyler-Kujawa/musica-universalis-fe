import { Injectable } from '@angular/core'

import { Subject } from '../models/subject'

import { SubjectMocks } from '../models/testdata/subjectMocks'

@Injectable()
export class SubjectService{
    private subjects:Subject[];
    private subjectMock:SubjectMocks;

    constructor(){
        this.subjectMock = new SubjectMocks();
        this.subjects = this.subjectMock.subjects;
    }

    getAllSubjects(): Subject[]{
        return null;
    }

    getSubjectsByTopic(topic:String): Subject[]{
        let results: Subject[] = [];
        for(let subject of this.subjects){
            if(subject!=null && subject.topicId === topic ){
                results.push(subject)
            }
        }
        console.log(results);
        return results
    }
}