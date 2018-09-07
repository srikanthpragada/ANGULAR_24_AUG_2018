import { Component, OnInit } from '@angular/core';
import { Course } from './Course'

@Component({
    selector: 'st-course-list',
    templateUrl: './courselist.component.html'
})
export class CourseListComponent implements OnInit {
    courses : Course[];
    constructor() { 
        this.courses = 
           [
            new Course("Python Programming"), 
            new Course("Angular",15),
            new Course("Java SE 10"),
            new Course("C Programming",35,false)
           ];
    }

    ngOnInit(): void { }

    deleteCourse(idx : number) {
         console.log("Deleting course : " + idx)
         this.courses.splice(idx,1)
    }
}


