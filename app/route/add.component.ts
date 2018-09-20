import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { CountryRepository } from './CountryRepository';


@Component({
    templateUrl: './add.component.html'
})
export class AddComponent   {
     message : string = null; 
     done : boolean = false; 

     addCountry(code : string, name : string, capital : string) {
        // validate details 
        CountryRepository.GetCountries().push( 
            {"Code" : code, "Name" : name, "Capital" : capital}
        );
        this.message = name + " has been added successfully!";
        this.done = true;
     }
     cancel() {
         this.done = true; 
     }
}