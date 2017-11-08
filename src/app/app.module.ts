import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CourseModule } from './course/course.module';
import { SubjectModule } from './subject/subject.module';
import { UserModule } from './user/user.module';

import { CourseService } from './course/course.service';
import { SubjectService } from './subject/subject.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SubjectModule,
    CourseModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [ CourseService, SubjectService ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
