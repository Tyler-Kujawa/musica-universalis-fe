import { Level } from "../level"

import { SubjectMocks } from './subjectMocks'

export class LevelMocks {
    levels: Level[] = new Array(100);
    subjectMock: SubjectMocks;

    constructor(){
        this.subjectMock = new SubjectMocks();

        this.levels[0] =  {
            name: 'One',
            subjects: [this.subjectMock.subjects[0]],
            completed: false
        }
        this.levels[1] = {
            name: 'Two',
            subjects: [this.subjectMock.subjects[1], this.subjectMock.subjects[2]],
            completed: false
        }
        this.levels[2] = {
            name: 'Two',
            subjects: [this.subjectMock.subjects[3], this.subjectMock.subjects[4]],
            completed: false
        }
        this.levels[3] = {
            name: 'Two',
            subjects: [this.subjectMock.subjects[4]],
            completed: false
        }
        this.levels[4] = {
            name: 'Two',
            subjects: [this.subjectMock.subjects[5]],
            completed: false
        }
    }
}