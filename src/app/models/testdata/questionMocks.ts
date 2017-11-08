import { Question } from '../question' 

export class QuestionMocks {

    questions: Question[];

    constructor(){
        
        this.questions = new Array(100);

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