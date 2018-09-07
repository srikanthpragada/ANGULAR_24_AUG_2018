import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'st-course',
  templateUrl: './course.component.html'
})
export class CourseComponent  {
  @ViewChild("topic") txtTopic : ElementRef; 
  title : string;
  duration : number;
  fee : number;
  discount : number = 0;
  topics : string[];

  constructor() { 
    this.title = "Angular 6"
    this.duration = 15
    this.fee = 2000
    this.topics = ['Data Binding','Forms','Http']
  }
 
  addTopic(topic) {
    for(var t of this.topics) {
       if (t == topic)
            {
              alert("Topic already exists!");
              return;
            }  
    }
    
    this.topics.push(topic)
    this.txtTopic.nativeElement.value = ""  // clear text from textbox 
  }
  showDiscount() {
     this.discount = this.fee * 0.10
  }

}
