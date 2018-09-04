import { Component} from '@angular/core';
 
@Component({
    selector: 'st-binding',
    templateUrl: './databinding.component.html',
    styleUrls: ['./databinding.component.css']
})
export class DataBindingComponent   {
    title : string = "Data Binding"
    itype : string = "checkbox"
    color : string = "blue"
    nums : number[] = [10,20,30,40]
    constructor() { }

    showInfo(info)
    {
        console.log(`X = ${info.offsetX}, Y = ${info.offsetY}`)
    }

    
}
