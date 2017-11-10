import { QuestionSet } from './question-set';

export interface Subject{
    name: string,
    overview: string
    completed: boolean,
    questionSets: QuestionSet[]
}