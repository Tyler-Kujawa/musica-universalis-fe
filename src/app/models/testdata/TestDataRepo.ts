import { Course } from '../course'
import { Level } from '../Level'
import { Subject } from '../subject'
import { Question } from '../question'

import { LevelMocks } from './levelMocks'

/*
    Course
        -> Levels
            -> Subjects
                -> Questions
*/

export class TestDataRepo{
    course: Course;
    levelMocks: LevelMocks;

    constructor (){
        this.levelMocks = new LevelMocks();

        this.course = {
            name: 'beginner',
            overview: 'Intro course, covers the basics',
            levels: this.levelMocks.levels,
            difficulty: 'easy',
            image_url: 'empty'
        }
    }
}