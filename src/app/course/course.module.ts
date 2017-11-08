import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component'

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: 'dashboard', component: CourseDashboardComponent }
        ])
    ],
    declarations: [
        CourseDashboardComponent
    ],
    exports: [ CommonModule ],
    providers: [],
})
export class CourseModule {
    
};