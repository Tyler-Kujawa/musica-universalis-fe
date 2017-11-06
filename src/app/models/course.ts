import { Level } from './level'

export interface Course{
    name: string,
    overview: string,
    levels: Level[],
    difficulty: string,
    image_url: string
}