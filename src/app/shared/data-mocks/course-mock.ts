import { Course } from '../../models/course' 

export class CourseMock {
    
    courses: Course[] = new Array();

    constructor(){
        this.courses.push({
            name: 'beginner',
            overview: 'Intro course, covers the basics',
            subjects: []
        });
    }  
    
    getCourse():Course[]{
        return this.courses;
    }
}
