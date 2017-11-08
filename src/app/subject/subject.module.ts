import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            { path: 'subjects', component: SubjectListComponent },
            { path: 'subjects/:topic', component: SubjectDetailComponent }
        ]) 
    ],
    declarations: [
        SubjectDetailComponent,
        SubjectListComponent
    ],
    exports: [ CommonModule ],
    providers: [ ],
})
export class SubjectModule {
    
}