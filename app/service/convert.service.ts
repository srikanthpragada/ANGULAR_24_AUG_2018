import { Injectable } from '@angular/core';

@Injectable()
export class ConvertService {
    INRTOUSD = 69;
    INRTOEUR = 78;

    constructor(){
        console.log("ConverterService instance is created!")
    }

    inrToUsd(inr : number) {
        return  inr / this.INRTOUSD
    }

    inrToEur(inr : number) {
        return  inr / this.INRTOEUR
    }
}