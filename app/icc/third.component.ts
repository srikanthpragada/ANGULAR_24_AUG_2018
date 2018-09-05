import { Component} from '@angular/core';

@Component({
    selector: 'st-third',
    template: `<h2>Third Component </h2>
               <st-fourth></st-fourth> `
})
export class ThirdComponent  {
    constructor() { }
 
}
