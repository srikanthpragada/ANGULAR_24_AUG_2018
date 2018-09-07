import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
    selector: 'st-inc',
    template: `<h1>{{counter}}</h1>
    <button (click)="inc()">Increment </button> 
    `,
})
export class IncrementComponent   {
    counter : number;
    constructor(private counterService : CounterService) { 

    }

    inc() {
        this.counterService.inc() 
        this.counter = this.counterService.counter
    }

    
}
