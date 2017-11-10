import { Question } from './question'

export interface QuestionSet {
    name: string,
    overview: string,
    questions: Question[],
    completed: boolean
}