import { Level } from "../level"

export class LevelMocks {
    levels: Level[];

    constructor(){
        this.levels = [
            {
                name: 'One',
                subjects: [],
                completed: false
            },
            {
                name: 'Two',
                subjects: [],
                completed: false
            },
            {
                name: 'Three',
                subjects: [],
                completed: false
            },
            {
                name: 'Four',
                subjects: [],
                completed: false
            }
        ];
    }
}