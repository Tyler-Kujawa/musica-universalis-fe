import { Subject } from './subject'

export interface Level {
    name: string,
    subjects: Subject[],
    completed: boolean
}