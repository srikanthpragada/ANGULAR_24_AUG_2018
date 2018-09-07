import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './Course'

@Component({
    selector: 'st-course-details',
    templateUrl: './coursedetails.component.html'
})
export class CourseDetailsComponent  {
    @Input() course : Course;
    @Input() index : number;
    // Declare event 
    @Output() deleteCourse = new EventEmitter<number>();

    constructor() { 
    }
    delete() {
        // raise event with index as parameter 
        this.deleteCourse.emit(this.index) 
    }
}
