import { Question } from './question';

export interface Subject{
    topicId: string,
    topicDisplay: string,
    overview: string
    image_url: string,
    completed: boolean,
    questionList: Question[]
}