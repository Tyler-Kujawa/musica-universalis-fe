import { Injectable } from '@angular/core'

import { Course } from '../models/course'
import { TestDataRepo } from '../models/testdata/TestDataRepo'

@Injectable()
export class CourseService{

    getAllCourses(): Course[]{
        return null;
    }

    getUserCourse(): Course{
        let tdRepo = new TestDataRepo();
        return tdRepo.course;
    }

    getAllUserCourses(): Course[]{
        return null;
    }

    findCourseByName(): Course[]{
        return null;
    }
}