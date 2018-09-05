import { Component  } from '@angular/core';
import { BracketsPipe  } from './brackets.pipe';

@Component({
    selector: 'st-pipes',
    templateUrl: './pipesdemo.component.html'
       
})
export class PipesDemoComponent   {
   today : Date;
   amount : number;
   name : string;
   person  = { "name" : "Steve", "phone" : "393939393"};

   constructor() {
       this.today = new Date();
       this.amount = 23939393.398;
       this.name ="Srikanth Technologies";
   }
}