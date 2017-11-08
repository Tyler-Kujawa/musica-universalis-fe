import { Course } from '../course'
import { Level } from '../Level'
import { Subject } from '../subject'
import { Question } from '../question'

import { SubjectMocks } from './subjectMocks'
import { LevelMocks } from './levelMocks'

/*
    Course
        -> Levels
            -> Subjects
                -> Questions
*/

export class TestDataRepo{
    course: Course;
    subjectMocks: SubjectMocks;
    levelMocks: LevelMocks;

    constructor (){
        this.subjectMocks = new SubjectMocks();
        this.levelMocks = new LevelMocks();

        this.course = {
            name: 'beginner',
            overview: 'Intro course, covers the basics',
            levels: [],
            difficulty: 'easy',
            image_url: 'empty'
        }
    
        this.levelMocks[0].subjects = [this.subjectMocks.subjects[0]] 
        this.levelMocks[1].subjects = [this.subjectMocks.subjects[1], this.subjectMocks.subjects[2]]
        this.levelMocks[2].subjects = [this.subjectMocks.subjects[3], this.subjectMocks.subjects[4]]
        this.levelMocks[3].subjects = [this.subjectMocks.subjects[5], this.subjectMocks.subjects[6]]

        this.course.levels = this.levelMocks.levels;

    }
}