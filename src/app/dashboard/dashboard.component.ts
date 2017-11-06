import { Component } from '@angular/core';
import { Course } from '../models/course';
import { Level } from '../models/level';
import { Subject } from '../models/subject';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent{
    banner = 'Dashboard';
    userCourses: Course[];
    // selectedCourse: Course;
    userLevel: string = "Two";


    demoSubjects: Subject[] = [{
        name: 'Treble Clef 1',
        overview: 'Learning the basics of the treble clef',
        image_url: 'empty',
        completed: false
    }];

    demoSubjects2: Subject[] = [
        {
        name: 'Treble Clef 2',
        overview: 'More on the treble clef',
        image_url: 'empty',
        completed: false
        },
        {
        name: 'Bass Clef 1',
        overview: 'Learning the basics of the treble clef',
        image_url: 'empty',
        completed: false
        }
    ];

    
    demoSubjects3: Subject[] = [
        {
        name: 'Treble Clef 3',
        overview: 'Even more on the treble clef',
        image_url: 'empty',
        completed: false
        },
        {
        name: 'Bass Clef 2',
        overview: 'More on the bass clef',
        image_url: 'empty',
        completed: false
        }
    ];

    demoSubjects4: Subject[] = [
        {
        name: 'Bass Clef 3',
        overview: 'Even more on the bass clef',
        image_url: 'empty',
        completed: false
        },
        {
        name: 'Grand Staff 1',
        overview: 'Working with the bass and treble clef',
        image_url: 'empty',
        completed: false
        }
    ];

    demoLevels: Level[] = [
        {
            name: 'One',
            subjects: this.demoSubjects,
            completed: false
        },
        {
            name: 'Two',
            subjects: this.demoSubjects2,
            completed: false
        },
        {
            name: 'Three',
            subjects: this.demoSubjects3,
            completed: false
        },
        {
            name: 'Four',
            subjects: this.demoSubjects4,
            completed: false
        }
    ];

    demoCourse: Course = 
        {
            name: 'beginner',
            overview: 'Intro course, covers the basics',
            levels: this.demoLevels,
            difficulty: 'easy',
            image_url: 'empty'
        }

    selectedCourse: Course = this.demoCourse;
}