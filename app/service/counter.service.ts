import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    counter : number = 0; 

    constructor() {
        console.log("CounterService instance created!")
    }
    
    inc() {
        this.counter ++;
    }

    dec() {
        this.counter --;
    }

}