import { Component } from '@angular/core';

@Component({
  selector: 'st-course',
  templateUrl: './course.component.html'
})
export class CourseComponent  {
  title : string;
  duration : number;
  fee : number;
  discount : number = 0;

  constructor() { 
    this.title = "Angular 6"
    this.duration = 15
    this.fee = 2000
  }
 
  showDiscount() {
     this.discount = this.fee * 0.10
  }

}
