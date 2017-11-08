import { Course } from './course'
import { Level } from './level'
import { Question } from './question'

export interface quiz{
    course: Course,
    level: Level,
    subject: Level,
    questionSet: Question[],
    answeredQuestions: Question[],
    unansweredQuestions: Question[]
}