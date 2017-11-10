import { Observable } from 'rxjs/RX'

import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { Subject } from '../../models/subject';

import { CourseService } from '../course.service';

@Component({
    templateUrl: './course-dashboard.component.html',
    styleUrls: ['course-dashboard.component.css'],
    providers: [ CourseService ]
})
export class CourseDashboardComponent{

    banner:String = 'Dashboard';
    userLevel: string = "Two";   
    courses: Course[];
    errorMessage: string;

    constructor(private courseService: CourseService){ 
    }

    ngOnInit(){
        this.courseService.getUserCourse().subscribe((courses: Course[]) => {
            this.courses = courses;
        })
    }

    getCourse(){
    }
}