import { Component } from '@angular/core';

@Component({
  selector: 'st-ide',
  templateUrl: './ide.component.html'
})
export class IdeComponent {

  courses : string[];
  
  constructor() {
    this.courses = ["Python","Angular","Java","C#"];
  }
  
}
