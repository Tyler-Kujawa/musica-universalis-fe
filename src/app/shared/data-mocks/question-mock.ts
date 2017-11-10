import { Question } from '../../models/question' 

export class QuestionMock {

    questions: Question[];

    constructor(){
        
        this.questions = new Array(2);

        this.questions[0] = {
            questionFormat: "text",
            answerFormat: "multipleChoice",
            text: "If I can't get your love, then what's a telephone bill? ",
            options: [
                'um',
                'umm',
                'Bootsy Collins'
            ],
            answer: 'Bootsy Collins',
            img_url: ''
        }

        this.questions[1] = {
            questionFormat: "text",
            answerFormat: "multipleChoice",
            text: "If I can't get your love, then what's a telephone bill? ",
            options: [
                'um',
                'umm',
                'Bootsy Collins'
            ],
            answer: 'Bootsy Collins',
            img_url: ''
        }
    }
}