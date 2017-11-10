import { Subject } from './subject'

export interface Course{
    name: string,
    overview: string,
    subjects: Subject[],
}