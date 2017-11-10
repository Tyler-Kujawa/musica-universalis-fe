import { QuestionSet } from '../../models/question-set'

export class QuestionSetMock{
    questionSets: QuestionSet[];

    constructor(){
        this.questionSets.push(
            {
                name: "",
                overview: "",
                questions: [],
                completed: false
            }
        );
    }
}