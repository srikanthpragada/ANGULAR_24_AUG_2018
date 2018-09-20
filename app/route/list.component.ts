import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { CountryRepository } from './CountryRepository';

@Component({
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

    countries :  Country[];

    constructor() { }

    ngOnInit() { 
        this.countries = CountryRepository.GetCountries();
    }
}