import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import {  SubjectService } from '../subject.service'

@Component({
    templateUrl: './subject-detail.component.html',
    styleUrls: ['subject-detail.component.css']
})
export class SubjectDetailComponent {
    
    subjects = this._subjectService.getSubjectsByTopic(this.route.snapshot.params['topic']);
    topic = this.getSubjectTitle();
    lessonsTotal = this.subjects.length;
    lessonsCompleted = this.calculateNumOfCompletedLessons();

    constructor(private _subjectService: SubjectService, 
        private route: ActivatedRoute){
    }

    calculateNumOfCompletedLessons():number{
        let totalCompleted = 0;
        for(let lesson of this.subjects){
            if(lesson.completed == true){
                totalCompleted += 1;
            }
        }

        return totalCompleted;
    }

    getSubjectTitle():string{
        return this.subjects[0].topicDisplay;
    }
    
}