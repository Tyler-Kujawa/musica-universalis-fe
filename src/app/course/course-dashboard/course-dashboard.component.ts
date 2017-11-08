import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { Level } from '../../models/level';
import { Subject } from '../../models/subject';

import { CourseService } from '../course.service';

@Component({
    templateUrl: './course-dashboard.component.html',
    styleUrls: ['course-dashboard.component.css']
})
export class CourseDashboardComponent{

    constructor(private _courseService: CourseService){ 
    }

    banner = 'Dashboard';
    userCourses: Course[];
    userLevel: string = "Two";

    selectedCourse: Course = this._courseService.getUserCourse();
}