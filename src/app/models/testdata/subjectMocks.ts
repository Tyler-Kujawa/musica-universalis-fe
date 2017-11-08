import { Subject } from '../subject' 

export class SubjectMocks {

    subjects: Subject[];

    constructor(){
        this.subjects[0] = {
            name: 'Treble Clef 1',
            overview: 'Learning the basics of the treble clef',
            image_url: 'empty',
            completed: false
        };
    
        this.subjects[1] = {
            name: 'Treble Clef 2',
            overview: 'More on the treble clef',
            image_url: 'empty',
            completed: false
            }

        this.subjects[2] = {
            name: 'Bass Clef 1',
            overview: 'Learning the basics of the treble clef',
            image_url: 'empty',
            completed: false
        };
    
        
        this.subjects[3] = {            
            name: 'Treble Clef 3',
            overview: 'Even more on the treble clef',
            image_url: 'empty',
            completed: false
        };
        
        this.subjects[4] = {
            name: 'Bass Clef 2',
            overview: 'More on the bass clef',
            image_url: 'empty',
            completed: false
        }
    
        this.subjects[5] = {
            name: 'Bass Clef 3',
            overview: 'Even more on the bass clef',
            image_url: 'empty',
            completed: false
        }

        this.subjects[6] = {
            name: 'Grand Staff 1',
            overview: 'Working with the bass and treble clef',
            image_url: 'empty',
            completed: false
        }
    }
}