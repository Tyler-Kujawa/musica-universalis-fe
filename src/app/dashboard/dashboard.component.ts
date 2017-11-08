import { Component } from '@angular/core';
import { Course } from '../models/course';
import { Level } from '../models/level';
import { Subject } from '../models/subject';

import { TestDataRepo } from '../models/testdata/TestDataRepo'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent{
    testDataRepo:TestDataRepo = new TestDataRepo();

    banner = 'Dashboard';
    userCourses: Course[];
    // selectedCourse: Course;
    userLevel: string = "Two";

    selectedCourse: Course = this.testDataRepo.course;
}