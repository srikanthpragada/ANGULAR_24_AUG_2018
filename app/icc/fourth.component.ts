import { Component} from '@angular/core';

@Component({
    selector: 'st-fourth',
    template: `<h3>{{today | date : 'dd-MM-y HH:mm:ss' }}</h3>`
})
export class FourthComponent  {
    today : Date;

    constructor() {
        this.today = new Date();
     }
 
}
