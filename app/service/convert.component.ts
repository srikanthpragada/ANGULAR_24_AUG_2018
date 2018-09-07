import { Component, OnInit, Optional } from '@angular/core';
import { ConvertService} from './convert.service'

@Component({
    selector: 'st-convert',
    templateUrl: './convert.component.html'
    // providers : [ ConvertService ]
})
export class ConvertComponent implements OnInit {
    result : number = 0;

    // Depedency Injection 
    constructor(@Optional() private converter : ConvertService) { 
    }

    ngOnInit()
    {
        if (this.converter)
          console.log("Found ConverterService");
        else
          console.log("Could not find ConverterService");
    }

    convertToUsd(amount : number) {
        // call method in service to convert 
        this.result =  this.converter.inrToUsd(amount)
    }
}
