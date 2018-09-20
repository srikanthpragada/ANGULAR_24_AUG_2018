import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { CountryRepository } from './CountryRepository';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
   country: Country = null;

    constructor(private route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.route.params.subscribe(params => {
            var code = params["code"]; // read route parameter with name code 
            // get country code 
            this.country = null;
            for (var c of CountryRepository.GetCountries()) {
                if (c.Code == code) {
                    this.country = c;
                    break;
                } // if
            } // for
        });
    }
}