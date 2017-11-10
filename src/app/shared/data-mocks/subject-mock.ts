import { Subject } from '../../models/subject' 

export class SubjectMock {

    subjects: Subject[];

    constructor(){

        this.subjects = new Array(100);

        this.subjects[0] = {
            name: 'Treble Clef 1',
            overview: 'Learning the basics of the treble clef',
            completed: false,
            questionSets: []
        }
    
        this.subjects[1] = {
            name: 'TrebleClef2',
            overview: 'More on the treble clef',
            completed: false,
            questionSets: []
            }

        this.subjects[2] = {
            name: 'BassClef1',
            overview: 'Learning the basics of the treble clef',
            completed: false,
            questionSets: []
        };   
        
        this.subjects[3] = {
            name: 'TrebleClef3',            
            overview: 'Even more on the treble clef',
            completed: false,
            questionSets: []
        };
        
        this.subjects[4] = {
            name: 'BassClef2',
            overview: 'More on the bass clef',
            completed: false,
            questionSets: []
        }
    
        this.subjects[5] = {
            name: 'BassClef3',
            overview: 'Even more on the bass clef',
            completed: false,
            questionSets: []
        }

        this.subjects[6] = {
            name: 'GrandStaff1',
            overview: 'Working with the bass and treble clef',
            completed: false,
            questionSets: []
        }
    }
}