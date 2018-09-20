import { Country } from './Country';


export class CountryRepository {
    static countries : Country[]  =
     [ 
              { Code : 'In', Name : "India", Capital : "New Delhi"},
              { Code : 'us', Name : "USA", Capital : "Washington DC"},
              { Code : 'sp', Name : "Spain", Capital : "Madrid"},
              { Code : 'uk', Name : "United Kingdom", Capital : "London"}
         ];

    static  GetCountries() : Country[] 
    {
         return this.countries; 
    }
}