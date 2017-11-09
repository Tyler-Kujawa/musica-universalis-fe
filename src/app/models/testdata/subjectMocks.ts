import { Subject } from '../subject' 
import { Question } from '../question' 

import { QuestionMocks } from './questionMocks'

export class SubjectMocks {

    subjects: Subject[];
    questionsMock: QuestionMocks;

    constructor(){

        this.subjects = new Array(100);
        this.questionsMock = new QuestionMocks();

        this.subjects[0] = {
            topicId: 'TrebleClef1',
            topicDisplay: 'Treble Clef 1',
            overview: 'Learning the basics of the treble clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        }
        
        this.subjects[7] = {
            topicId: 'TrebleClef1',
            topicDisplay: 'Treble Clef 1',
            overview: 'Learning the basics of the treble clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        }

        this.subjects[8] = {
            topicId: 'TrebleClef1',
            topicDisplay: 'Treble Clef 1',
            overview: 'Learning the basics of the treble clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        }

        this.subjects[9] = {
            topicId: 'TrebleClef1',
            topicDisplay: 'Treble Clef 1',
            overview: 'Learning the basics of the treble clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        }

        this.subjects[10] = {
            topicId: 'TrebleClef1',
            topicDisplay: 'Treble Clef 1',
            overview: 'Learning the basics of the treble clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        }
    
        this.subjects[1] = {
            topicId: 'TrebleClef2',
            topicDisplay: 'Treble Clef 2',
            overview: 'More on the treble clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
            }

        this.subjects[2] = {
            topicId: 'BassClef1',
            topicDisplay: 'Bass Clef 1',
            overview: 'Learning the basics of the treble clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        };   
        
        this.subjects[3] = {
            topicId: 'TrebleClef3',            
            topicDisplay: 'Treble Clef 3',
            overview: 'Even more on the treble clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        };
        
        this.subjects[4] = {
            topicId: 'BassClef2',
            topicDisplay: 'Bass Clef 2',
            overview: 'More on the bass clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        }
    
        this.subjects[5] = {
            topicId: 'BassClef3',
            topicDisplay: 'Bass Clef 3',
            overview: 'Even more on the bass clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        }

        this.subjects[6] = {
            topicId: 'GrandStaff1',
            topicDisplay: 'Grand Staff 1',
            overview: 'Working with the bass and treble clef',
            image_url: 'empty',
            completed: false,
            questionList: this.questionsMock.questions
        }
    }
}