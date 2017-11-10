import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import {  SubjectService } from '../subject.service'

@Component({
    templateUrl: './subject-detail.component.html',
    styleUrls: ['subject-detail.component.css']
})
export class SubjectDetailComponent {
    
    subjects = this._subjectService.getSubjectsByTopic(this.route.snapshot.params['topic']);
    lessonsTotal = this.subjects.length;
    lessonsCompleted = 0;

    constructor(private _subjectService: SubjectService, 
        private route: ActivatedRoute){
    }

   
}