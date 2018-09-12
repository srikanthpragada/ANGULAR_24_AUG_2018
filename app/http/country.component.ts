import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { HttpClient } from '@angular/common/http'


@Component({
    selector: 'st-countries',
    templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {
    countries : Country[];
    message : string;
    URL = "https://restcountries.eu/rest/v2/name/"

    constructor(private http : HttpClient) {
        this.countries = [];
    }

    ngOnInit() {
    }

    getCountries(name) {
        this.message = ""
        this.countries = []
        this.http.get<Country[]>(this.URL + name)
              .subscribe(
                   result => this.countries = result,
                   err =>  this.message = "Sorry! No country found!"
               );

    }
  
}
