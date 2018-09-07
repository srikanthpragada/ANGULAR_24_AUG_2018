import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
    selector: 'st-dec',
    template: `<h1>{{counter}}</h1>
    <button (click)="dec()">Decrement </button> 
    `
})
export class DecrementComponent   {
    counter : number;
    constructor(private counterService : CounterService) { 

    }

    dec() {
        this.counterService.dec() 
        this.counter = this.counterService.counter
    }

    
}
