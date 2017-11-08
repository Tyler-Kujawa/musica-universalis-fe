import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseModule } from './course/course.module'

import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
    imports: [ RouterModule.forRoot(
        [
            {path: '', redirectTo: '/home', pathMatch: 'full' },
            {path: 'home', component: HomepageComponent }
        ]
    )], 
    exports: [ RouterModule ]
})
export class AppRoutingModule { }