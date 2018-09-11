import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { HttpClient } from '@angular/common/http'


@Component({
    selector: 'st-countries',
    templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {
    countries : Country[];
    URL = "https://restcountries.eu/rest/v2/name/"

    constructor(private http : HttpClient) {
    }

    ngOnInit() {
    }

    getCountries(name) {
        this.http.get<Country[]>(this.URL + name)
              .subscribe( result => this.countries = result);

    }
  
}
