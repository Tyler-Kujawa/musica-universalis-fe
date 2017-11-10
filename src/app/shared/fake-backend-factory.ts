import {Http, BaseRequestOptions, Response, ResponseOptions,
        RequestMethod, XHRBackend, RequestOptions } from '@angular/http'
import {MockBackend, MockConnection} from '@angular/http/testing'

import { Course } from '../models/course'
import { CourseMock } from './data-mocks/course-mock'

function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions){

    let courseMock = new CourseMock();
    console.log("in fake backend factgory");

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {
            // get active course
            if (connection.request.url.endsWith('api/course') &&
            connection.request.method === RequestMethod.Get){
                console.log("condition matched");
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        status: 200,
                        body: [{
                            name: 'beginner',
                            overview: 'Intro course, covers the basics',
                            subjects: []
                        }]
                    })
                ))
                return;
            }

            // get all courses

        }, 500)
    })

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
}